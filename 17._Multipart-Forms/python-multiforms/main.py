from fastapi import FastAPI, Form


app = FastAPI()

@app.post("/form/")
def baasic_form(username: str = Form(...), password: str = Form(default=..., min_length=8)):
    print(username, password)
    return {username, password}