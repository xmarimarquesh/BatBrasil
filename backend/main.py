import pypyodbc as odbc # pip install pypyodbc
import pandas as pd # pip install pandas
from credencial import username, password

server = 'batbrasilfreeserver.database.windows.net'
database = 'BatBrasil'
connection_string = 'Driver={ODBC Driver 18 for SQL Server};Server=tcp:batbrasilfreeserver.database.windows.net,1433;Database=BatBrasil;Uid={your_user_name};Pwd={your_password_here};Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30;Authentication=ActiveDirectoryPassword'