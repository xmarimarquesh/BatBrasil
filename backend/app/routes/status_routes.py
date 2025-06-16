
from flask import Blueprint, jsonify
from app.database import get_connection

status = Blueprint('status', __name__)

@status.get('/status')
def get_status():
    try:
        conn = get_connection()
        cursor = conn.cursor()

        cursor.execute('SELECT * FROM Status')
        rows = cursor.fetchall()
        cols = [desc[0] for desc in cursor.description]

        data = [dict(zip(cols, row)) for row in rows]
        return jsonify(data)

    except Exception as e:
        print(e)
        return jsonify({'error': 'Erro ao buscar status'}), 500
    finally:
        cursor.close()
        conn.close()
