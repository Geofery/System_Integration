import json
from fastapi import FastAPI, Request, Response
import requests

app = FastAPI()
port = 3000

@app.post("/monitoring/alert")
async def monitoring_event():
    response = requests.post("https://cd74166a9942016a0bfe3e77992deccd.serveo.net/monitoring/alert", 
    json={"url": "https://locutus.serveo.net/webhook/recieve", 
     "password": "1234"})
    response = json.dumps(response)
    return { "data": response }

@app.post("/monitoring/access")
async def monitoring_access():
    response = requests.post("https://cd74166a9942016a0bfe3e77992deccd.serveo.net/monitoring/access", 
    json={"url": "https://locutus.serveo.net/webhook/recieve", 
     "password": "1234"})
    response = json.dumps(response)
    return { "data": response }

@app.post("/webhook/recieve")
async def reciever(request: Request):
    data = await request.body()
    print(json.loads(data))
    return
