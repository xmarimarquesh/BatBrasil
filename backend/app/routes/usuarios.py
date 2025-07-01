from flask import Blueprint, jsonify
from app.database import get_connection

usuarios = Blueprint('usuarios', __name__)

@usuarios.get('/tecnicos')
def get_tecnicos():
    try:
        conn = get_connection()
        cursor = conn.cursor()

        # Supondo que função 2 = Técnico
        cursor.execute("SELECT RUF, Nome FROM Usuario WHERE IDFuncao = 2")
        rows = cursor.fetchall()

        data = [{"id": row[0], "nome": row[1]} for row in rows]
        return jsonify(data)
    except Exception as e:
        print(e)
        return jsonify({'erro': 'Erro ao buscar técnicos'}), 500
    finally:
        cursor.close()
        conn.close()
