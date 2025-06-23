import mysql.connector
from .config import host, database, user, password, port

def get_connection():
    try:
        conn = mysql.connector.connect(
            host=host,
            database=database,
            user=user,
            password=password,
            port=port
        )
        print("Conexão com o MySQL feita com sucesso!")
        return conn
    except mysql.connector.Error as e:
        print("Erro na conexão com MySQL:", e)
        raise
