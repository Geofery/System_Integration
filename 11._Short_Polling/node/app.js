<<<<<<< HEAD
import express from 'express'

const app = express();

const randomNumbers = [];

app.get("/randomNumbers", (req, res) => {
    res.send({data: randomNumbers});
=======
import express from "express";

const app = express();

app.use(express.static("public"));

const randomNumbers = [1, 34, 843];


app.get("/randomNumbers", (req, res) => {
    res.send({ data: randomNumbers });
>>>>>>> main
});

app.post("/simulateNewRandomNumbers", (req, res) => {
    const newNumber = getRandomInt(3, 1001);
    randomNumbers.push(newNumber);
<<<<<<< HEAD
    res.send({data: newNumber});
});

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
};

app.use(express.static("public"));

const PORT = 8080;

app.listen(PORT, () => console.log("server is running on port", PORT));
=======
    res.send({ data: newNumber })
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
>>>>>>> main
