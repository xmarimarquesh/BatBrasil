
from flask import Flask
from flask_cors import CORS

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

    return app
