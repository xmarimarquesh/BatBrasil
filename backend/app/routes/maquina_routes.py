
from flask import Blueprint, jsonify
from app.database import get_connection

maquinas = Blueprint('maquinas', __name__)

@maquinas.get('/maquinas')
def get_maquinas():
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
        print(e)
        return jsonify({'error': 'Erro ao buscar máquinas'}), 500
    finally:
        cursor.close()
        conn.close()

@maquinas.get('/maquinas/<int:setor_id>')
def get_maquinas_por_setor(setor_id):
    try:
        conn = get_connection()
        cursor = conn.cursor()

        cursor.execute("SELECT ID, Descricao FROM Maquina WHERE IDSetor = %s", (setor_id,))
        rows = cursor.fetchall()

        data = [{"id": row[0], "descricao": row[1]} for row in rows]
        return jsonify(data)
    except Exception as e:
        print(e)
        return jsonify({'erro': 'Erro ao buscar máquinas'}), 500
    finally:
        cursor.close()
        conn.close()
