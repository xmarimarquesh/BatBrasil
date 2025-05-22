import pypyodbc as odbc # pip install pypyodbc
from flask import Flask, jsonify, request, session # pip install flask
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

app = Flask(__name__)
app.secret_key = "hemaju"
CORS(app, origins="http://localhost:1212", supports_credentials=True  )


# ----------------------------- LOGIN -------------------------
@app.post("/login")
def login():
  data = request.get_json()
  RuF = data.get("ruf")
  print(RuF)

  try:
      
    try:
      conn = odbc.connect(connection_string)
      print("Connection successful!")
    except odbc.Error as e:
      print("Error connecting to the database:", e)
    cursor = conn.cursor()

    cursor.execute(f'select U.RUF as ruf, U.Nome as nome, U.IDFuncao as funcao from Usuario U where U.ruf = {RuF}')
    user_current = cursor.fetchone()

    if not user_current:
      return jsonify({"error": "Usuário não encontrado"}), 404

    print(user_current)

    session["ruf_current"] = user_current[0]
    session["nome_current"] = user_current[1]
    session["funcao_current"] = user_current[2]

    cursor.close()
    conn.close()
    return jsonify({"message":"ok"})
  except odbc.Error as e:
    print("Error fetching data:", e)
    return jsonify({"error": "Erro interno"}), 500

# -------------------------PEGAR TODOS OS STATUS ---------------------
@app.get("/status")
def get_setores():
  try:
    try:
      conn = odbc.connect(connection_string)
      print("Connection successful!")
    except odbc.Error as e:
      print("Error connecting to the database:", e)

    cursor = conn.cursor()

    cursor.execute('select * from Status')

    rows = cursor.fetchall() # isso vai retornar uma lista (tabela inteira) de listas (cada linha da tabela)

    cols = [c[0] for c in cursor.description]
    data = [dict(zip(cols, row)) for row in rows]

    cursor.close()
    conn.close()
    return jsonify(data)  
  except odbc.Error as e:
    print("Error fetching data:", e)

# ------------------------------------------- PEGAR SESSÃO ------------------------------------

@app.get("/session")
def get_session():
    if "nome_current" in session:
        return jsonify({
            "nome": session["nome_current"],
            "ruf": session["ruf_current"],
            "funcao": session["funcao_current"]
        }), 200
    return jsonify({"error": "Sessão não encontrada"}), 401

# ----------------------------------------- PEGAR CHAMADOS ------------------------------------------

@app.get("/chamados")
def get_chamados():
  try:
    try:
      conn = odbc.connect(connection_string)
      print("Connection successful!")
    except odbc.Error as e:
      print("Error connecting to the database:", e)

    cursor = conn.cursor()

    cursor.execute("""SELECT 
      C.Descricao AS Descricao, 
      UT.Nome AS NomeTecnico,
      UF.Nome AS NomeFincionario,
      C.DataCriacao AS DataCriacao,
      S.status AS StatusCurrent,
      D.Nivel AS Nivel
      FROM [dbo].[Chamado] C
      INNER JOIN [dbo].[Usuario] UT ON UT.RUF = C.IDTecnico 
      INNER JOIN [dbo].[Usuario] UF ON UF.RUF = C.IDFuncionario
      INNER JOIN [dbo].[Status] S ON S.ID = C.IDStatus
      INNER JOIN [dbo].[Dificuldade] D ON D.ID = C.IDDificuldade
    """)

    rows = cursor.fetchall() # isso vai retornar uma lista (tabela inteira) de listas (cada linha da tabela)

    print(rows)

    cols = [c[0] for c in cursor.description]
    data = [dict(zip(cols, row)) for row in rows]

    cursor.close()
    conn.close()
    return jsonify(data)
  except odbc.Error as e:
    print("Error fetching data:", e)

# ----------------------------------------- PEGAR CHAMADOS ESPECÍFICO ------------------------------------------

# @app.get("/chamados/{id_user}")
# def get_session(id_user: int):
#     if "nome_current" in session:
#         return jsonify({
#             "nome": session["nome_current"],
#             "ruf": session["ruf_current"],
#             "funcao": session["funcao_current"]
#         }), 200
#     return jsonify({"error": "Sessão não encontrada"}), 401

# --------------------------------------- RENDERIZAR ----------------------------------------------------
if __name__ == "__main__":
  app.run(debug=True, port=5000)


[
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

# ---------------------------------- CRIAR O BANCO -----------------------------------------------

# """
# IF OBJECT_ID(N'Funcao', N'U') IS NULL
# BEGIN
#   CREATE TABLE Funcao (
#       ID INT PRIMARY KEY IDENTITY(1,1),
#       Funcao VARCHAR(100)
#   );

#   INSERT INTO Funcao(Funcao) VALUES ('Operador'), ('Técnico'), ('Líder');
# END;
# IF OBJECT_ID(N'Dificuldade', N'U') IS NULL
# BEGIN
#   CREATE TABLE Dificuldade (
#       ID INT PRIMARY KEY IDENTITY(1,1),
#       Nivel VARCHAR(50) NOT NULL
#   );

#   INSERT INTO Dificuldade(Nivel) VALUES
#   ('Fácil'),
#   ('Médio'),
#   ('Urgente');
# END;
# IF OBJECT_ID(N'Status', N'U') IS NULL
# BEGIN
#   CREATE TABLE Status (
#       ID INT PRIMARY KEY IDENTITY(1,1),
#       Status VARCHAR(50)
#   );

#   INSERT INTO Status(Status) VALUES ('Aberto'), ('Em andamento'), ('Fechado')
# END;
# IF OBJECT_ID(N'Setor', N'U') IS NULL
# BEGIN
#   CREATE TABLE Setor (
#       ID INT PRIMARY KEY IDENTITY(1,1),
#       Name VARCHAR(100)
#   );

#   INSERT INTO Setor (Name) VALUES
#     ('Fábrica Uberlândia'),
#     ('Fábrica Santa Cruz do Sul'),
#     ('Centro de Pesquisa e Inovação Cachoeirinha'),
#     ('Centro Administrativo Rio de Janeiro'),
#     ('Centro Administrativo São Paulo'),
#     ('Centro de Distribuição Porto Alegre'),
#     ('Centro de Distribuição Recife'),
#     ('Centro de Distribuição Curitiba'),
#     ('Centro de Distribuição Belo Horizonte'),
#     ('Fábrica Uberlândia 2'),
#     ('Fábrica Santa Cruz do Sul 2'),
#     ('Centro de Pesquisa e Inovação Cachoeirinha 2'),
#     ('Centro Administrativo Rio de Janeiro 2'),
#     ('Centro Administrativo São Paulo 2'),
#     ('Centro de Distribuição Porto Alegre 2');
# END;
# IF OBJECT_ID(N'Maquina', N'U') IS NULL
# BEGIN
#   CREATE TABLE Maquina (
#       ID INT PRIMARY KEY IDENTITY(1,1),
#       Descricao VARCHAR(2000),
#       DataCompra DATE,
#       IDSetor INT,
#       CONSTRAINT FK_Maquina_Setor FOREIGN KEY (IDSetor) REFERENCES Setor(ID)
#   );

#   INSERT INTO Maquina (Descricao, DataCompra, IDSetor) VALUES
#     ('Máquina de Produção de Cigarros', '2015-03-10', 1),
#     ('Máquina de Embalagem de Cigarros', '2016-07-22', 2),
#     ('Máquina de Testes de Qualidade', '2017-05-15', 3),
#     ('Máquina de Impressão de Embalagens', '2018-09-30', 4),
#     ('Máquina de Embalagem de Cigarros', '2019-11-18', 5),
#     ('Máquina de Produção de Cigarros', '2020-01-25', 6),
#     ('Máquina de Testes de Qualidade', '2021-03-14', 7),
#     ('Máquina de Produção de Cigarros', '2022-06-20', 8),
#     ('Máquina de Embalagem de Cigarros', '2023-08-10', 9),
#     ('Máquina de Produção de Cigarros', '2024-10-05', 10),
#     ('Máquina de Embalagem de Cigarros', '2025-01-15', 11),
#     ('Máquina de Testes de Qualidade', '2026-03-25', 12),
#     ('Máquina de Impressão de Embalagens', '2027-06-30', 13),
#     ('Máquina de Embalagem de Cigarros', '2028-09-10', 14);
# END;
# IF OBJECT_ID(N'Ferramenta', N'U') IS NULL
# BEGIN
#   CREATE TABLE Ferramenta (
#       ID INT PRIMARY KEY IDENTITY(1,1),
#       Descricao VARCHAR(2000),
#       DataCompra DATE,
#       IDMaquina INT,
#       CONSTRAINT FK_Ferramenta_Maquina FOREIGN KEY (IDMaquina) REFERENCES Maquina(ID)
#   );

#   INSERT INTO Ferramenta (Descricao, DataCompra, IDMaquina) VALUES
#     ('Ferramenta de Ajuste de Máquina', '2015-03-12', 1),
#     ('Ferramenta de Limpeza de Máquina', '2016-07-24', 2),
#     ('Ferramenta de Teste de Qualidade', '2017-05-17', 3),
#     ('Ferramenta de Impressão', '2018-10-02', 4),
#     ('Ferramenta de Embalagem', '2019-11-20', 5),
#     ('Ferramenta de Produção', '2020-01-27', 6),
#     ('Ferramenta de Teste de Qualidade', '2021-03-16', 7),
#     ('Ferramenta de Produção', '2022-06-22', 8),
#     ('Ferramenta de Embalagem', '2023-08-12', 9),
#     ('Ferramenta de Ajuste de Máquina', '2024-10-07', 10),
#     ('Ferramenta de Limpeza de Máquina', '2025-01-17', 11),
#     ('Ferramenta de Teste de Qualidade', '2026-03-27', 12),
#     ('Ferramenta de Impressão', '2027-06-31', 13),
#     ('Ferramenta de Embalagem', '2028-09-12', 14);

# END;
# IF OBJECT_ID(N'Usuario', N'U') IS NULL
# BEGIN
#   CREATE TABLE Usuario (
#       RUF INT PRIMARY KEY IDENTITY(1,1),
#       Nome varchar(100),
#       IDFuncao INT,
#       CONSTRAINT FK_Usuario_Funcao FOREIGN KEY (IDFuncao) REFERENCES Funcao(ID)
#   );

#   INSERT INTO Usuario (Nome, IDFuncao) VALUES
#     ('Ana Souza', 1), 
#     ('Carlos Silva', 2), 
#     ('Fernanda Oliveira', 3),  
#     ('Gabriel Santos', 1), 
#     ('Juliana Costa', 2), 
#     ('Lucas Pereira', 3), 
#     ('Mariana Almeida', 1),  
#     ('Paulo Rocha', 2),  
#     ('Renata Lima', 3),  
#     ('Eduardo Martins', 1), 
#     ('Patrícia Gomes', 2),  
#     ('Rafael Oliveira', 3),
#     ('Bruna Santos', 1), 
#     ('Thiago Costa', 2), 
#     ('Camila Pereira', 3); 
# END;
# IF OBJECT_ID(N'Chamado', N'U') IS NULL
# BEGIN
#   CREATE TABLE Chamado (
#       ID INT PRIMARY KEY IDENTITY(1,1),
#       Descricao VARCHAR(2000),
#       DescricaoResolucao VARCHAR(2000),
#       Feedback VARCHAR(2000),
#       DataCriacao DATETIME,
#       DataFechamento DATETIME,
#       IDDificuldade INT,
#       CONSTRAINT FK_Dificuldade_Chamado FOREIGN KEY (IDDificuldade) REFERENCES Dificuldade(ID),
#       IDMaquina INT,
#       CONSTRAINT FK_Chamado_Maquina FOREIGN KEY (IDMaquina) REFERENCES Maquina(ID),
#       IDFerramenta INT,
#       CONSTRAINT FK_Chamado_Ferramenta FOREIGN KEY (IDFerramenta) REFERENCES Ferramenta(ID),
#       IDStatus INT,
#       CONSTRAINT FK_Chamado_Status FOREIGN KEY (IDStatus) REFERENCES Status(ID),
#       IDTecnico INT,
#       CONSTRAINT FK_Chamado_Tecnico FOREIGN KEY (IDTecnico) REFERENCES Usuario(RUF),
#       IDFuncionario INT, 
#       CONSTRAINT FK_Chamado_Funcionario FOREIGN KEY (IDFuncionario) REFERENCES Usuario(RUF)
#   );

#   INSERT INTO Chamado (Descricao, DataCriacao, IDDificuldade, IDMaquina, IDFerramenta, IDStatus, IDTecnico, IDFuncionario)
#     VALUES
#       ('Problema no sistema de alimentação da máquina', '2025-05-21 08:15:00', 3, 6, 6, 1, 7, 6),
#       ('Falha intermitente no painel de controle', '2025-05-21 09:45:00', 3, 7, 7, 2, 8, 7),
#       ('Ruído excessivo durante operação', '2025-05-21 10:30:00', 1, 8, 8, 3, 9, 8),
#       ('Lubrificação insuficiente detectada', '2025-05-21 11:10:00', 1, 9, 9, 1, 10, 9),
#       ('Erro de leitura de sensores', '2025-05-21 13:00:00', 3, 10, 10, 2, 11, 10),
#       ('Falha na esteira de alimentação', '2025-05-21 14:30:00', 3, 11, 11, 1, 12, 11),
#       ('Parada inesperada da linha de produção', '2025-05-21 15:45:00', 3, 12, 12, 3, 13, 12),
#       ('Travamento na unidade de impressão', '2025-05-21 16:15:00', 2, 13, 13, 2, 14, 13),
#       ('Desalinhamento da matriz de corte', '2025-05-21 16:50:00', 2, 14, 14, 1, 15, 14),
#       ('Desgaste excessivo da ferramenta', '2025-05-21 17:25:00', 2, 1, 1, 2, 2, 1),
#       ('Temperatura fora do padrão operacional', '2025-05-21 17:45:00', 1, 2, 2, 3, 3, 2);
# END;
# IF OBJECT_ID(N'Notificacao', N'U') IS NULL
# BEGIN
#   CREATE TABLE Notificacao (
#       ID INT PRIMARY KEY IDENTITY(1,1),
#       Data DATE,
#       IDChamado INT,
#       CONSTRAINT FK_Notificacao_Chamado FOREIGN KEY (IDChamado) REFERENCES Chamado(ID),
#       IDRemetente INT,
#       CONSTRAINT FK_Notificacao_Remetente FOREIGN KEY (IDRemetente) REFERENCES Usuario(RUF)
#   );
# END;
# """
]