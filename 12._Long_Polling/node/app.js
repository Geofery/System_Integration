import express from "express";

const app = express();

const clients = [];

app.get("/event/subscribe", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    clients.push(res);
});

app.get("/events/publish", (req, res) => {
const newData = {data: "this is a new message"};

clients.forEach(client => {
    client.send(newData);
})

res.status(204).end();
});

const PORT = 8080;

app.listen(PORT, () => console.log("server is running on port", PORT));
