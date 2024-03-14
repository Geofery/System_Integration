from fastapi import FastAPI, Request, Response
import json

#poetry init-n
#poetry add uvicorn fastapi
#poetry shell
#uvicorn main:app --reload 

app = FastAPI()
urls = []

@app.post("/customwebhookjson/{url}")
async def github_webhook(request: Request, url: str):
    print(url)
    data = await request.body()
    print(json.loads(data))   
    urls.append(url) 
    print(urls)
    return 

@app.post("/githubwebhookform")
async def github_webhook(request: Request, response: Response):
    if request.headers.get("content-type") == "application/x-www-form-urlencoded":
        form_data = await request.form()
        payload = form_data['payload']
        print(payload)
        response.status_code = 201
    else: 
        response.status_code = 400

