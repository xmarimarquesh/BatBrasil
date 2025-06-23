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
    from app.routes.usuarios import usuarios
    from app.routes.setores import setores

    app.register_blueprint(auth)
    app.register_blueprint(status)
    app.register_blueprint(maquinas)
    app.register_blueprint(chamados)
    app.register_blueprint(setores)
    app.register_blueprint(usuarios)
    return app
