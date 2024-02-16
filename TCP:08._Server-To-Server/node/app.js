import express from "express"

const app = express();

//Task create a route called requestFastApi
//Make a request to /fastapiData here and serve it as a response
//nodemon app.js

const PORT = 8080;
app.listen(PORT, ()=> console.log("Server is running on port", PORT));



app.get("/requestFastApi", async (req, res) => {
    const response = await fetch("http://127.0.0.1:8000/fastapiData");
    const result = await response.json();
    res.send({data: result})
});

app.get("/expressData", (req, res) => {
    res.send({isRunning: true });
});



