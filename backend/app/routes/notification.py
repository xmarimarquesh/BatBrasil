# app/notifications.py

from datetime import datetime, timedelta
from flask import Blueprint, jsonify, request, current_app, g
from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.jobstores.base import JobLookupError
import logging

# Importe sua função de conexão com o banco de dados
# Certifique-se de que get_connection() retorna um objeto de conexão e que você o fecha
from app.database import get_connection

# Configuração de logging (opcional, mas recomendado para depuração)
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# --- Blueprint para Notificações ---
notifications_bp = Blueprint('notifications', __name__)

# --- Scheduler para tarefas em segundo plano ---
scheduler = BackgroundScheduler()

# --- Funções de Serviço de Notificação (Operações de Banco de Dados) ---

def _execute_db_query(query: str, params: tuple = None, fetch_one: bool = False, fetch_all: bool = False):
    """
    Função auxiliar para executar queries no banco de dados.
    Gerencia a conexão e o cursor.
    """
    conn = None
    cursor = None
    result = None
    try:
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute(query, params)
        if fetch_one:
            result = cursor.fetchone()
        elif fetch_all:
            result = cursor.fetchall()
        else:
            conn.commit() # Commit para operações de escrita (INSERT, UPDATE, DELETE)
        return result
    except Exception as e:
        logger.error(f"Erro na query SQL: {query} com params {params}. Erro: {e}")
        if conn:
            conn.rollback() # Desfaz a transação em caso de erro
        raise # Re-lança a exceção para ser tratada no nível superior
    finally:
        if cursor:
            cursor.close()
        if conn:
            conn.close()

def criar_notificacao(id_usuario: int, tipo: str, mensagem: str, id_chamado: int = None):
    """Cria e salva uma nova notificação no banco de dados."""
    query = """
        INSERT INTO Notificacoes (id_usuario, tipo, mensagem, id_chamado, lida, data_criacao)
        VALUES (%s, %s, %s, %s, %s, %s)
    """
    params = (id_usuario, tipo, mensagem, id_chamado, False, datetime.now())
    try:
        _execute_db_query(query, params)
        logger.info(f"Notificação criada: {tipo} para usuário {id_usuario} (Chamado: {id_chamado})")
        return True
    except Exception as e:
        logger.error(f"Falha ao criar notificação: {e}")
        return False

def marcar_notificacao_como_lida(notificacao_id: int, id_usuario_autenticado: int):
    """Marca uma notificação específica como lida, verificando o proprietário."""
    # Primeiro, verifica se a notificação pertence ao usuário
    check_query = "SELECT id_usuario FROM Notificacoes WHERE id = %s"
    owner_id_tuple = _execute_db_query(check_query, (notificacao_id,), fetch_one=True)

    if owner_id_tuple and owner_id_tuple[0] == id_usuario_autenticado:
        update_query = "UPDATE Notificacoes SET lida = TRUE WHERE id = %s"
        try:
            _execute_db_query(update_query, (notificacao_id,))
            logger.info(f"Notificação {notificacao_id} marcada como lida pelo usuário {id_usuario_autenticado}")
            return True
        except Exception as e:
            logger.error(f"Falha ao marcar notificação {notificacao_id} como lida: {e}")
            return False
    logger.warning(f"Tentativa inválida de marcar notificação {notificacao_id} como lida pelo usuário {id_usuario_autenticado}")
    return False

# --- Lógica de Gatilhos de Notificação ---

def on_chamado_status_change(chamado_id: int, novo_status: str, id_tecnico_responsavel: int = None):
    """
    Função a ser chamada quando o status de um chamado é alterado.
    Você integraria isso no seu serviço/controller de chamados.
    """
    # Obter dados do chamado (status atual, operador, técnico)
    chamado_query = """
        SELECT id, titulo, status, id_operador, id_tecnico
        FROM Chamados
        WHERE id = %s
    """
    chamado_data = _execute_db_query(chamado_query, (chamado_id,), fetch_one=True)
    if not chamado_data:
        logger.warning(f"Chamado {chamado_id} não encontrado para alteração de status.")
        return

    # Mapeia os dados do tuple para um dicionário ou variáveis nomeadas para facilitar o acesso
    chamado = {
        "id": chamado_data[0],
        "titulo": chamado_data[1],
        "status": chamado_data[2],
        "id_operador": chamado_data[3],
        "id_tecnico": chamado_data[4]
    }

    # Notificação para o Operador: Chamado aceito ou status alterado
    if chamado["id_operador"]:
        mensagem_operador = f"Seu chamado #{chamado['id']} ('{chamado['titulo']}') foi atualizado para '{novo_status}'."
        criar_notificacao(chamado["id_operador"], 'chamado_atualizado', mensagem_operador, chamado["id"])
        logger.info(f"Notificação para operador {chamado['id_operador']}: Chamado {chamado['id']} atualizado.")

    # Notificação para o Técnico: Chamado atribuído (se o status mudou para algo como 'Em andamento' ou 'Aberto' com atribuição)
    # Supondo que 'id_tecnico_responsavel' é o ID do técnico que está sendo atribuído AGORA
    if novo_status == 'Aberto' and id_tecnico_responsavel and chamado["id_tecnico"] != id_tecnico_responsavel:
        # Atualiza o técnico no chamado (se necessário, seu endpoint de atualização de chamado já deve fazer isso)
        # update_chamado_tecnico_query = "UPDATE Chamados SET id_tecnico = %s WHERE id = %s"
        # _execute_db_query(update_chamado_tecnico_query, (id_tecnico_responsavel, chamado['id']))

        mensagem_tecnico = f"Você tem um novo chamado #{chamado['id']} ('{chamado['titulo']}') atribuído para atender."
        criar_notificacao(id_tecnico_responsavel, 'chamado_atribuido', mensagem_tecnico, chamado["id"])
        logger.info(f"Notificação para técnico {id_tecnico_responsavel}: Chamado {chamado['id']} atribuído.")

    # Se o status é 'Em andamento' ou 'Concluído', cancelar a tarefa de verificação de atraso para o líder
    if novo_status in ['Em andamento', 'Concluído']:
        cancelar_verificacao_atraso(chamado["id"])
        logger.info(f"Cancelada verificação de atraso para Chamado {chamado['id']}.")

    # Agendar verificação de atraso para o Líder se o chamado está 'Aberto' e tem um técnico atribuído
    if novo_status == 'Aberto' and chamado["id_tecnico"]:
        agendar_verificacao_atraso_lider(chamado["id"])

# --- Agendamento para Notificação de Líder (APScheduler) ---

def verificar_atraso_chamado_job(chamado_id: int):
    """
    Job que será executado pelo scheduler para verificar atraso.
    Deve ser executado dentro de um contexto de aplicação Flask.
    """
    with current_app.app_context():
        # Obter dados do chamado
        chamado_query = """
            SELECT id, titulo, status, id_tecnico
            FROM Chamados
            WHERE id = %s
        """
        chamado_data = _execute_db_query(chamado_query, (chamado_id,), fetch_one=True)

        if chamado_data:
            chamado = {
                "id": chamado_data[0],
                "titulo": chamado_data[1],
                "status": chamado_data[2],
                "id_tecnico": chamado_data[3]
            }

            if chamado["status"] == 'Aberto' and chamado["id_tecnico"]:
                # Assumindo que você tem uma forma de identificar os líderes.
                # Pode ser uma query para todos os usuários com tipo_usuario='lider'.
                lideres_query = "SELECT id FROM Usuarios WHERE tipo_usuario = 'lider'"
                lider_ids = [row[0] for row in _execute_db_query(lideres_query, fetch_all=True)]

                for lider_id in lider_ids:
                    mensagem_lider = (f"ATENÇÃO: O técnico não alterou o status do chamado #{chamado['id']} "
                                      f"('{chamado['titulo']}') de 'Aberto' para 'Em andamento' em 30 minutos.")
                    criar_notificacao(lider_id, 'atraso_tecnico', mensagem_lider, chamado['id'])
                    logger.warning(f"Notificação de atraso para Líder {lider_id} sobre Chamado {chamado['id']}.")
            else:
                logger.info(f"Verificação de atraso para Chamado {chamado_id} - status não é mais 'Aberto' ou técnico não atribuído.")
        else:
            logger.info(f"Verificação de atraso para Chamado {chamado_id} - chamado não encontrado.")


def agendar_verificacao_atraso_lider(chamado_id: int):
    """Agenda a tarefa de verificação de atraso para um chamado."""
    # Remove qualquer tarefa existente para este chamado para evitar duplicação
    cancelar_verificacao_atraso(chamado_id)

    run_date = datetime.now() + timedelta(minutes=30)
    scheduler.add_job(
        verificar_atraso_chamado_job,
        'date',
        run_date=run_date,
        args=[chamado_id],
        id=f'atraso_chamado_{chamado_id}',
        replace_existing=True # Substitui se já houver uma job com este ID
    )
    logger.info(f"Agendada verificação de atraso para Chamado {chamado_id} em {run_date}")

def cancelar_verificacao_atraso(chamado_id: int):
    """Cancela uma tarefa de verificação de atraso agendada."""
    try:
        scheduler.remove_job(f'atraso_chamado_{chamado_id}')
        logger.info(f"Job de atraso para Chamado {chamado_id} cancelado.")
    except JobLookupError:
        logger.debug(f"Job de atraso para Chamado {chamado_id} não encontrado (talvez já executado ou não exista).")
    except Exception as e:
        logger.error(f"Erro ao cancelar job de atraso para Chamado {chamado_id}: {e}")


# --- Endpoints da API para Notificações (Flask Blueprint) ---

@notifications_bp.get('/notificacoes')
def get_notificacoes():
    """Retorna as notificações do usuário logado."""
    # **IMPORTANTE**: Substitua esta linha pela sua lógica de autenticação
    # para obter o ID do usuário logado.
    # Exemplo: id_usuario_logado = g.user.id # Se você usa Flask-Login ou similar
    # Ou: id_usuario_logado = request.headers.get('X-User-ID') # Se for um cabeçalho customizado
    # Por enquanto, estou usando um ID de teste do query param. REMOVA EM PRODUÇÃO!
    id_usuario_logado = request.args.get('user_id', type=int)
    if not id_usuario_logado:
        return jsonify({'error': 'ID do usuário é necessário (para testes). Em produção, use autenticação.'}), 401

    query = """
        SELECT id, tipo, mensagem, id_chamado, lida, data_criacao
        FROM Notificacoes
        WHERE id_usuario = %s
        ORDER BY data_criacao DESC
    """
    try:
        notificacoes_rows = _execute_db_query(query, (id_usuario_logado,), fetch_all=True)
        
        notificacoes_json = []
        if notificacoes_rows:
            for n_row in notificacoes_rows:
                notificacoes_json.append({
                    'id': n_row[0],
                    'tipo': n_row[1],
                    'mensagem': n_row[2],
                    'id_chamado': n_row[3],
                    'lida': n_row[4],
                    'data_criacao': n_row[5].isoformat() # Converte datetime para string ISO 8601
                })
        return jsonify(notificacoes_json)
    except Exception as e:
        logger.error(f"Erro ao buscar notificações para o usuário {id_usuario_logado}: {e}")
        return jsonify({'error': 'Erro ao buscar notificações'}), 500

@notifications_bp.post('/notificacoes/<int:notificacao_id>/marcar_como_lida')
def post_marcar_como_lida(notificacao_id: int):
    """Marca uma notificação como lida."""
    # **IMPORTANTE**: Substitua esta linha pela sua lógica de autenticação
    # para obter o ID do usuário logado.
    id_usuario_logado = request.args.get('user_id', type=int) # Apenas para teste, REMOVA EM PRODUÇÃO!
    if not id_usuario_logado:
        return jsonify({'error': 'ID do usuário é necessário (para testes). Em produção, use autenticação.'}), 401

    try:
        if marcar_notificacao_como_lida(notificacao_id, id_usuario_logado):
            return jsonify({'message': 'Notificação marcada como lida com sucesso!'}), 200
        return jsonify({'error': 'Não foi possível marcar a notificação como lida ou não autorizada.'}), 403
    except Exception as e:
        logger.error(f"Erro no endpoint marcar_como_lida para notificacao {notificacao_id}: {e}")
        return jsonify({'error': 'Erro interno ao marcar notificação como lida.'}), 500

# --- Funções de Inicialização do Scheduler (para chamar no seu __init__.py) ---

def start_notification_scheduler(app_instance):
    """
    Inicializa o scheduler de notificações.
    Deve ser chamado uma vez quando a aplicação Flask é iniciada.
    """
    # Garante que o scheduler saiba o contexto da aplicação para acessar o banco de dados
    scheduler.configure(job_defaults={'misfire_grace_time': 3600}) # 1 hora de tolerância para jobs perdidos
    scheduler.start()
    logger.info("Scheduler de notificações iniciado.")

def shutdown_notification_scheduler():
    """
    Desliga o scheduler de notificações.
    Deve ser chamado quando a aplicação Flask está sendo desligada.
    """
    if scheduler.running:
        scheduler.shutdown()
        logger.info("Scheduler de notificações desligado.")

# --- Exemplo de uso e integração (não faz parte do arquivo notifications.py em si) ---
# Este bloco é apenas para mostrar como você integraria isso no seu app principal.
# Você não deve colocá-lo diretamente neste arquivo.
"""
# Exemplo de como seu app/__init__.py ficaria:

from flask import Flask
from app.database import init_db # Se você tiver uma função para inicializar o DB
from app.maquinas import maquinas # Seu blueprint existente
from app.notifications import notifications_bp, start_notification_scheduler, shutdown_notification_scheduler

def create_app():
    app = Flask(__name__)
    # ... outras configurações do seu app ...

    # Registra os Blueprints
    app.register_blueprint(maquinas, url_prefix='/api')
    app.register_blueprint(notifications_bp, url_prefix='/api') # Registre o novo blueprint

    # Inicializa o scheduler quando o app for iniciado
    with app.app_context():
        # Opcional: Criar a tabela Notificacoes se não existir (apenas para desenvolvimento)
        try:
            conn = get_connection()
            cursor = conn.cursor()
            cursor.execute('''
                CREATE TABLE IF NOT EXISTS Notificacoes (
                    id SERIAL PRIMARY KEY,
                    id_usuario INT NOT NULL,
                    tipo VARCHAR(50) NOT NULL,
                    mensagem TEXT NOT NULL,
                    id_chamado INT,
                    lida BOOLEAN DEFAULT FALSE,
                    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    -- Adicione as chaves estrangeiras se ainda não o fez no seu DB
                    -- FOREIGN KEY (id_usuario) REFERENCES Usuarios(id),
                    -- FOREIGN KEY (id_chamado) REFERENCES Chamados(id)
                );
            ''')
            conn.commit()
            cursor.close()
            conn.close()
            logger.info("Tabela Notificacoes verificada/criada.")
        except Exception as e:
            logger.error(f"Erro ao verificar/criar tabela Notificacoes: {e}")

    start_notification_scheduler(app)

    # Registra um handler para desligar o scheduler quando o app for encerrado
    import atexit
    atexit.register(shutdown_notification_scheduler)

    return app

# Exemplo de como seu run.py ficaria:
# from app import create_app
# app = create_app()
# if __name__ == '__main__':
#     app.run(debug=True, port=5000)
"""