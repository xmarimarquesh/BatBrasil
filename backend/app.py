import pypyodbc as odbc # pip install pypyodbc
from flask import Flask, jsonify # pip install flask
from flask_cors import CORS # pip install flask flask-cors
# python -m venv .venv
# .\.venv\Scripts\activate.bat

# RODAR: python app.py

server = 'batbrasilfreeserver.database.windows.net'
database = 'BatBrasil'
connection_string = '''Driver={ODBC Driver 18 for SQL Server};
Server=batbrasilfreeserver.database.windows.net;
Database=BatBrasil;
Uid={hemaju};
Pwd={Jumahe123};
Encrypt=yes;
TrustServerCertificate=no;
'''

try:
    conn = odbc.connect(connection_string)
    print("Connection successful!")
except odbc.Error as e:
    print("Error connecting to the database:", e)

app = Flask(__name__)
CORS(app)

@app.get("/setores")
def get_setores():
    try:
        cursor = conn.cursor()

        cursor.execute('select * from Setor')

        rows = cursor.fetchall() # isso vai retornar uma lista (tabela inteira) de listas (cada linha da tabela)

        cursor.close()
        conn.close()
        print("Connection closed.")

        return jsonify(rows)
    except odbc.Error as e:
        print("Error fetching data:", e)

if __name__ == "__main__":
    app.run(debug=True)

# PADRÃO PARA INSERIR DADOS -----------------------------------------------------


# try:
#     cursor = conn.cursor()

#     query = '''Insert into Setor values (1, 'Helena')''' # se for strign tem que estar em aspas simples
    
#     cursor.execute(query)
#     cursor.commit() 

# except odbc.Error as e:
#     print("Error fetching data:", e)
#-------------------------------------------------------------------------------

# PADRÃO PARA BUSCAR DADOS ----------------------------------------------------------
# try:

#     cursor.execute('select * from Setor')

#     rows = cursor.fetchall() # isso vai retornar uma lista (tabela inteira) de listas (cada linha da tabela)

#     for row in rows:
#         print(row)

#     cursor.close()
#     conn.close()
#     print("Connection closed.")
# except odbc.Error as e:
#     print("Error fetching data:", e)
#---------------------------------------------------------------------------------- 