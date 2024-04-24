from fastapi import FastAPI, Form, File, UploadFile
import aiofiles 
from typing import Optional

app = FastAPI()

@app.post("/form/")
def baasic_form(username: str = Form(...), password: str = Form(default=..., min_length=8)):
    print(username, password)
    return {username, password}

#@app.post("/fileform")
#def file_form(file: bytes = File(...), description: Optional[str] = Form(None)):
 #   with open('file', 'wb') as f:
  #      f.write(file)

   # return {'message': 'File Uploaded'}

@app.post("/fileform/")
async def file_form(file: UploadFile = File(...), description: Optional[str] = Form(None)):
    print(description)
    safe_filename = file.filename.replace("/", "_").replace("\\", "_")

    async with aiofiles.open(safe_filename, "wb") as f:
        while content := await file.read(1024):
            f.write(content)

    return {"filename": file.filename}