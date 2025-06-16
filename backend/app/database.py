
import pypyodbc as odbc
from .config import connection_string

def get_connection():
    try:
        conn = odbc.connect(connection_string)
        return conn
    except odbc.Error as e:
        print("Erro na conexão:", e)
        raise
