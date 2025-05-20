import pypyodbc as odbc # pip install pypyodbc
from flask import Flask # pip install flask
from flask_cors import CORS # pip install flask flask-cors
import json
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



@app.get("/status")
def get_setores():
  try:
    cursor = conn.cursor()

    cursor.execute('select * from Status')

    rows = cursor.fetchall() # isso vai retornar uma lista (tabela inteira) de listas (cada linha da tabela)

    cursor.close()
    conn.close()
    print("Connection closed.")

    return json.dump(rows)
  except odbc.Error as e:
    print("Error fetching data:", e)



# RENDERIZAR -------------------------------------------------------------------------------------------
if __name__ == "__main__":

  # # CRIAR BANCO AUTOMATICAMENTE APÓS RODAR O BACK TODA VEZ
  # try:
  #   cursor = conn.cursor()
  #   statements = [
  #     """
  #     IF OBJECT_ID(N'Funcao', N'U') IS NULL
  #     BEGIN
  #       CREATE TABLE Funcao (
  #           ID INT PRIMARY KEY IDENTITY(1,1),
  #           Funcao VARCHAR(100)
  #       );

  #       INSERT INTO Funcao(Funcao) VALUES ('Operador'), ('Técnico'), ('Líder');
  #     END;
  #     """,
  #     """
  #     IF OBJECT_ID(N'Usuario', N'U') IS NULL
  #     BEGIN
  #       CREATE TABLE Usuario (
  #           RUF INT PRIMARY KEY IDENTITY(1,1),
  #           IDFuncao INT,
  #           CONSTRAINT FK_Usuario_Funcao FOREIGN KEY (IDFuncao) REFERENCES Funcao(ID)
  #       );
  #     END;
  #     """,
  #     """
  #     IF OBJECT_ID(N'Status', N'U') IS NULL
  #     BEGIN
  #       CREATE TABLE Status (
  #           ID INT PRIMARY KEY IDENTITY(1,1),
  #           Status VARCHAR(50)
  #       );

  #       INSERT INTO Status(Status) VALUES ('Aberto'), ('Em andamento'), ('Fechado')
  #     END;
  #     """,
  #     """
  #     IF OBJECT_ID(N'Setor', N'U') IS NULL
  #     BEGIN
  #       CREATE TABLE Setor (
  #           ID INT PRIMARY KEY IDENTITY(1,1),
  #           Name VARCHAR(100)
  #       );
  #     END;
  #     """,
  #     """
  #     IF OBJECT_ID(N'Maquina', N'U') IS NULL
  #     BEGIN
  #       CREATE TABLE Maquina (
  #           ID INT PRIMARY KEY IDENTITY(1,1),
  #           Descricao VARCHAR(2000),
  #           DataCompra DATE,
  #           IDSetor INT,
  #           CONSTRAINT FK_Maquina_Setor FOREIGN KEY (IDSetor) REFERENCES Setor(ID)
  #       );
  #     END;
  #     """,
  #     """
  #     IF OBJECT_ID(N'Ferramenta', N'U') IS NULL
  #     BEGIN
  #       CREATE TABLE Ferramenta (
  #           ID INT PRIMARY KEY IDENTITY(1,1),
  #           Descricao VARCHAR(2000),
  #           DataCompra DATE,
  #           IDMaquina INT,
  #           CONSTRAINT FK_Ferramenta_Maquina FOREIGN KEY (IDMaquina) REFERENCES Maquina(ID)
  #       );
  #     END;
  #     """,
  #     """
  #     IF OBJECT_ID(N'Chamado', N'U') IS NULL
  #     BEGIN
  #       CREATE TABLE Chamado (
  #           ID INT PRIMARY KEY IDENTITY(1,1),
  #           Descricao VARCHAR(2000),
  #           DescricaoResolucao VARCHAR(2000),
  #           Feedback VARCHAR(2000),
  #           DataCriacao DATETIME,
  #           DataFechamento DATETIME,
  #           IDMaquina INT,
  #           CONSTRAINT FK_Chamado_Maquina FOREIGN KEY (IDMaquina) REFERENCES Maquina(ID),
  #           IDFerramenta INT,
  #           CONSTRAINT FK_Chamado_Ferramenta FOREIGN KEY (IDFerramenta) REFERENCES Ferramenta(ID),
  #           IDStatus INT,
  #           CONSTRAINT FK_Chamado_Status FOREIGN KEY (IDStatus) REFERENCES Status(ID),
  #           IDTecnico INT,
  #           CONSTRAINT FK_Chamado_Tecnico FOREIGN KEY (IDTecnico) REFERENCES Usuario(RUF),
  #           IDFuncionario INT, 
  #           CONSTRAINT FK_Chamado_Funcionario FOREIGN KEY (IDFuncionario) REFERENCES Usuario(RUF)
  #       );
  #     END;
  #     """,
  #     """
  #     IF OBJECT_ID(N'Notificacao', N'U') IS NULL
  #     BEGIN
  #       CREATE TABLE Notificacao (
  #           ID INT PRIMARY KEY IDENTITY(1,1),
  #           Data DATE,
  #           IDChamado INT,
  #           CONSTRAINT FK_Notificacao_Chamado FOREIGN KEY (IDChamado) REFERENCES Chamado(ID),
  #           IDRemetente INT,
  #           CONSTRAINT FK_Notificacao_Remetente FOREIGN KEY (IDRemetente) REFERENCES Usuario(RUF)
  #       );
  #     END;
  #     """

  #   ]

  #   # Executa cada função da lista statements
  #   for statement in statements:
  #       cursor.execute(statement)

  #   cursor.commit() 

  # except odbc.Error as e:
  #   print("Error fetching data to create:", e)
  # finally:
  #   cursor.close()
  #   conn.close()
  #   print("Connection closed.")

  app.run(debug=True, port=5000)

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