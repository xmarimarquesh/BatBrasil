from .database import get_connection

def testar_select():
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("SHOW TABLES;")
    tabelas = cursor.fetchall()
    for tabela in tabelas:
        print(tabela)
    cursor.close()
    conn.close()

testar_select()

