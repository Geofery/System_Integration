from fastapi import FastAPI
import requests

app = FastAPI()

@app.get("/requestExpress")
def get_express_data():
    response = requests.get("http://127.0.0.1:8080/expressData").json()
    return { "data": response }

