from flask import Flask, jsonify
from flask_cors import CORS
from .database import get_connection

def create_app():
    app = Flask(__name__)
    app.secret_key = 'hemaju'
    CORS(app, origins="http://localhost:1212", supports_credentials=True)

    from .routes.auth_routes import auth
    from .routes.status_routes import status
    from .routes.maquina_routes import maquinas
    from .routes.chamado_routes import chamados

    app.register_blueprint(auth)
    app.register_blueprint(status)
    app.register_blueprint(maquinas)
    app.register_blueprint(chamados)

    @app.route('/teste-conexao')
    def teste_conexao():
        try:
            conn = get_connection()
            cursor = conn.cursor()
            cursor.execute("SHOW TABLES;")
            tabelas = [t[0] for t in cursor.fetchall()]  # pega nomes das tabelas
            cursor.close()
            conn.close()
            return jsonify({"status": "sucesso", "tabelas": tabelas})
        except Exception as e:
            return jsonify({"status": "erro", "mensagem": str(e)}), 500

    return app
