
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
                C.ID, C.Descricao, UT.Nome AS Tecnico, UF.Nome AS Funcionario,
                C.DataCriacao, S.Status, D.Nivel, C.IDMaquina, C.Feedback, M.Descricao AS NomeMaquina
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
                "Id": row[0],
                "Descricao": row[1],
                "NomeTecnico": row[2],
                "NomeFuncionario": row[3],
                "DataCriacao": row[4].isoformat(),
                "StatusCurrent": row[5],
                "Nivel": row[6],
                "IDMaquina": row[7],
                "Feedback": row[8],
                "NomeMaquina": row[9]
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
        id_funcionario = data.get('IDFuncionario')
        id_status = data.get('IDStatus')
        id_dificuldade = data.get('IDDificuldade')

        conn = get_connection()
        cursor = conn.cursor()

        cursor.execute("""
            INSERT INTO Chamado (Descricao, IDTecnico, IDFuncionario, IDStatus, IDDificuldade, DataCriacao)
            VALUES (?, ?, ?, ?, ?, GETDATE())
        """, (descricao, id_tecnico, id_funcionario, id_status, id_dificuldade))

        conn.commit()

        return jsonify({"mensagem": "Chamado adicionado com sucesso!"}), 201

    except Exception as e:
        print(e)
        return jsonify({'erro': 'Erro interno'}), 500
    finally:
        cursor.close()
        conn.close()
