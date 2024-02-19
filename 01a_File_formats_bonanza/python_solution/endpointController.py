from fastapi import FastAPI 
import requests

app = FastAPI()
#uvicorn endpointController:app --reload 
#fileFormats = ["csv", "yaml", "txt", "xml", "json"]

@app.get("/{fileformat}")
async def get_express_data(fileformat: str):
    request = requests.get(f'http://127.0.0.1:3000/{fileformat}').json()
    print(request)
    return request