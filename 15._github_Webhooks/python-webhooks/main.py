from fastapi import FastAPI, Request
import json
#poetry init-n
#poetry add uvicorn fastapi
#poetry shell
#uvicorn main:app --reload 

app = FastAPI()

@app.post("/githubwebhookjson")
async def github_webhook(request: Request):
    data = await request.body()
    print(json.loads(data))    
    return 
