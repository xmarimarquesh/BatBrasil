
from app import create_app

app = create_app()

# python -m venv .venv
# .\.venv\Scripts\activate
# pip install -r requirements.txt
# pip install mysql-connector-python

if __name__ == "__main__":
    app.run(debug=True, port=5000)
