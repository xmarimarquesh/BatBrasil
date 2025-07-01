from flask import Blueprint, jsonify, request
from app.database import get_connection

maquinas = Blueprint('maquinas', __name__)

@maquinas.get('/maquinas')
def get_maquinas():
    """Busca todas as máquinas com o nome do seu setor."""
    conn = None
    cursor = None
    try:
        conn = get_connection()
        cursor = conn.cursor()

        cursor.execute("""
            SELECT 
                M.ID, M.Descricao, M.DataCompra, S.Nome AS Setor
            FROM Maquina M
            INNER JOIN Setor S ON S.ID = M.IDSetor
        """)

        rows = cursor.fetchall()
        # Corrigido "DataCriacao" para "DataCompra" para corresponder ao banco de dados
        data = [
            {
                "ID": row[0],
                "Descricao": row[1],
                "DataCompra": str(row[2]), 
                "Setor": row[3]
            } for row in rows
        ]
        return jsonify(data)

    except Exception as e:
        print(f"Erro em get_maquinas: {e}")
        return jsonify({'error': 'Erro ao buscar máquinas'}), 500
    finally:
        if cursor:
            cursor.close()
        if conn:
            conn.close()

@maquinas.post('/maquinas')
def create_maquina():
    """Cria uma nova máquina no banco de dados."""
    data = request.get_json()
    descricao = data.get('Descricao')
    data_compra = data.get('DataCompra')
    id_setor = data.get('IDSetor')

    # Validação dos dados recebidos
    if not all([descricao, data_compra, id_setor]):
        return jsonify({'error': 'Dados incompletos. Descricao, DataCompra e IDSetor são obrigatórios.'}), 400

    conn = None
    cursor = None
    try:
        conn = get_connection()
        cursor = conn.cursor()

        cursor.execute(
            "INSERT INTO Maquina (Descricao, DataCompra, IDSetor) VALUES (%s, %s, %s)",
            (descricao, data_compra, id_setor)
        )
        conn.commit()

        return jsonify({'message': 'Máquina cadastrada com sucesso'}), 201

    except Exception as e:
        if conn:
            conn.rollback() # Desfaz a transação em caso de erro
        print(f"Erro em create_maquina: {e}")
        return jsonify({'error': 'Erro interno ao cadastrar máquina'}), 500
    finally:
        if cursor:
            cursor.close()
        if conn:
            conn.close()


@maquinas.get('/maquinas/<int:setor_id>')
def get_maquinas_por_setor(setor_id):
    """Busca máquinas filtrando por um setor específico."""
    conn = None
    cursor = None
    try:
        conn = get_connection()
        cursor = conn.cursor()

        cursor.execute("SELECT ID, Descricao FROM Maquina WHERE IDSetor = %s", (setor_id,))
        rows = cursor.fetchall()

        data = [{"id": row[0], "descricao": row[1]} for row in rows]
        return jsonify(data)
    except Exception as e:
        print(f"Erro em get_maquinas_por_setor: {e}")
        return jsonify({'error': 'Erro ao buscar máquinas por setor'}), 500
    finally:
        if cursor:
            cursor.close()
        if conn:
            conn.close()

