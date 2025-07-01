from flask import Blueprint, jsonify
from app.database import get_connection

setores = Blueprint('setores', __name__)

@setores.get('/setores')
def get_setores():
    try:
        conn = get_connection()
        cursor = conn.cursor()

        cursor.execute("SELECT ID, Nome FROM Setor")
        rows = cursor.fetchall()

        data = [{"id": row[0], "nome": row[1]} for row in rows]
        return jsonify(data)
    except Exception as e:
        print(e)
        return jsonify({'erro': 'Erro ao buscar setores'}), 500
    finally:
        cursor.close()
        conn.close()
