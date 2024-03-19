import json
from fastapi import FastAPI, Request, Response
import requests

app = FastAPI()
port = 3000

@app.post("/monitoring/alert")
async def monitoring_event():
    response = requests.post("https://38dff2ed06c4c7c1df537b473b200a94.serveo.net/monitoring/alert", 
    json={"url": "https://locutus.serveo.net/webhook/recieve", 
     "password": "1234"}).json
    return { "data": response }

@app.post("/monitoring/access")
async def monitoring_access():
    response = requests.post("https://38dff2ed06c4c7c1df537b473b200a94.serveo.net/monitoring/access", 
    json={"url": "https://locutus.serveo.net/webhook/recieve", 
     "password": "1234"}).json
    return { "data": response }

@app.post("/webhook/recieve")
async def github_webhook(request: Request):
    data = await request.body()
    print(json.loads(data))
    return
