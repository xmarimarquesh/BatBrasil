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

        return jsonify({"message": "Login bem-sucedido"}), 200

    except Exception as e:
        print(f"Erro no login: {e}")
        return jsonify({"error": "Erro interno no login"}), 500

    finally:
        if cursor:
            cursor.close()
        if conn:
            conn.close()


@auth.get('/session')
def get_session():
    if 'nome_current' in session:
        return jsonify({
            'nome': session['nome_current'],
            'ruf': session['ruf_current'],
            'funcao': session['funcao_current']
        }), 200
    return jsonify({'error': 'Sessão não encontrada'}), 401
