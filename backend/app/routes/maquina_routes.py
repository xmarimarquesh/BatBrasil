
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
                M.ID, M.Descricao, M.DataCompra, S.Name AS Setor
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
