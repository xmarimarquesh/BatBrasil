from flask import Blueprint, jsonify, request, session
from app.database import get_connection

auth = Blueprint('auth', __name__)

@auth.post('/login')
def login():
    conn = None
    cursor = None
    try:
        data = request.get_json()
        ruf = data.get('ruf')

        conn = get_connection()
        cursor = conn.cursor()

        cursor.execute("SELECT RUF, Nome, IDFuncao FROM Usuario WHERE RUF = ?", (ruf,))
        user = cursor.fetchone()

        if not user:
            return jsonify({"error": "Usuário não encontrado"}), 404

        session['ruf_current'] = user[0]
        session['nome_current'] = user[1]
        session['funcao_current'] = user[2]

        # Retorna os dados do usuário junto com a resposta
        return jsonify({
            "message": "Login bem-sucedido",
            "user": {
                "ruf": user[0],
                "nome": user[1],
                "funcao": user[2]
            }
        }), 200

    except Exception as e:
        print(f"Erro no login: {e}")
        return jsonify({"error": "Erro interno no login"}), 500

    finally:
        if cursor:
            cursor.close()
        if conn:
            conn.close()
