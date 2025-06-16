
from app import create_app

app = create_app()

# python -m venv .venv
# .\.venv\Scripts\activate
# pip install -r requirements.txt

if __name__ == "__main__":
    app.run(debug=True, port=5000)
