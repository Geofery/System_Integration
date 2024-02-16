from fastapi import FastAPI 
import requests

app = FastAPI()
#uvicorn main:app --reload 

@app.get("/fastapiData")
def _():
    return {"message": [1,2,3,4,5]}

@app.get("/requestExpress")
def get_express_data():
    request = requests.get("http://127.0.0.1:8080/expressData").json
    return request