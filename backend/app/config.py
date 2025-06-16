
server = 'batbrasilfreeserver.database.windows.net'
database = 'BatBrasil'
username = 'hemaju'
password = 'Jumahe123'

connection_string = f'''
Driver={{ODBC Driver 18 for SQL Server}};
Server={server};
Database={database};
Uid={username};
Pwd={password};
Encrypt=yes;
TrustServerCertificate=no;
'''
