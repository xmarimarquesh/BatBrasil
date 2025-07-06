
from flask import Blueprint, jsonify, request
from app.database import get_connection

chamados = Blueprint('chamados', __name__)

@chamados.get('/chamados')
def get_chamados():
    
    try:
        conn = get_connection()
        cursor = conn.cursor()

        cursor.execute("""
            SELECT 
                C.IDChamado, C.Descricao, UT.Nome AS Tecnico, UF.Nome AS Funcionario,
                C.DataCriacao, S.Status, D.Nivel, C.IDMaquina, C.Feedback, M.Descricao AS NomeMaquina, C.IDTecnico, C.IDFuncionario
            FROM Chamado C
            INNER JOIN Maquina M ON M.ID = C.IDMaquina
            INNER JOIN Usuario UT ON UT.RUF = C.IDTecnico 
            INNER JOIN Usuario UF ON UF.RUF = C.IDFuncionario
            INNER JOIN Status S ON S.ID = C.IDStatus
            INNER JOIN Dificuldade D ON D.ID = C.IDDificuldade
        """)

        rows = cursor.fetchall()
        data = [
            {
                "IDChamado": row[0],
                "Descricao": row[1],
                "NomeTecnico": row[2],
                "NomeFuncionario": row[3],
                "DataCriacao": row[4].isoformat(),
                "StatusCurrent": row[5],
                "Nivel": row[6],
                "IDMaquina": row[7],
                "Feedback": row[8],
                "NomeMaquina": row[9],
                "IDTecnico": row[10],
                "IDFuncionario": row[11]
            } for row in rows
        ]
        return jsonify(data)

    except Exception as e:
        print(e)
        return jsonify({'error': 'Erro ao buscar chamados'}), 500
    finally:
        cursor.close()
        conn.close()


@chamados.post('/chamados')
def adicionar_chamado():
    try:
        data = request.get_json()
        descricao = data.get('Descricao')
        id_tecnico = data.get('IDTecnico')
        id_maquina = data.get('IDMaquina')
        id_funcionario = data.get('IDFuncionario')
        id_status = data.get('IDStatus')
        id_dificuldade = data.get('IDDificuldade')

        conn = get_connection()
        cursor = conn.cursor()

        cursor.execute("""
            INSERT INTO Chamado (Descricao, IDTecnico, IDFuncionario, IDStatus, IDDificuldade, IDMaquina, DataCriacao)
            VALUES (%s, %s, %s, %s, %s, %s, NOW())
        """, (descricao, id_tecnico, id_funcionario, id_status, id_dificuldade, id_maquina))

        conn.commit()

        return jsonify({"mensagem": "Chamado adicionado com sucesso!"}), 201

    except Exception as e:
        print(e)
        return jsonify({'erro': 'Erro interno'}), 500
    finally:
        cursor.close()
        conn.close()

@chamados.put('/chamados/<int:id_chamado>/status')
def atualizar_status_chamado(id_chamado):
    try:
        data = request.get_json()
        novo_status = data.get('Status')

        # Mapeamento dos nomes para os IDs da tabela Status
        status_map = {
            "Aberto": 1,
            "Em andamento": 2,
            "Concluído": 3
        }

        id_status = status_map.get(novo_status)
        if not id_status:
            return jsonify({"erro": "Status inválido"}), 400

        conn = get_connection()
        cursor = conn.cursor()

        cursor.execute("""
            UPDATE Chamado
            SET IDStatus = %s
            WHERE IDChamado = %s
        """, (id_status, id_chamado))

        conn.commit()

        return jsonify({"mensagem": "Status atualizado com sucesso!"}), 200

    except Exception as e:
        print(e)
        return jsonify({"erro": "Erro ao atualizar status"}), 500
    finally:
        cursor.close()
        conn.close()

@chamados.put('/chamados/<int:id_chamado>/cancelar')
def cancelar_chamado(id_chamado):
    try:
        # ID do status "Cancelado" (você pode mudar esse ID se for diferente)
        STATUS_CANCELADO = 4

        conn = get_connection()
        cursor = conn.cursor()

        cursor.execute("""
            UPDATE Chamado
            SET IDStatus = %s
            WHERE IDChamado = %s
        """, (STATUS_CANCELADO, id_chamado))

        conn.commit()
        return jsonify({"mensagem": "Chamado cancelado com sucesso!"}), 200

    except Exception as e:
        print(e)
        return jsonify({"erro": "Erro ao cancelar chamado"}), 500
    finally:
        cursor.close()
        conn.close()
