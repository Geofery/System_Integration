import express from "express";

const app = express();

<<<<<<< HEAD
const clients = [];

app.get("/event/subscribe", (req, res) => {
=======
let clients = [];

app.get("/events/subscribe", (req, res) => {
>>>>>>> main
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    clients.push(res);
<<<<<<< HEAD
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
=======

    req.on("close", () => {
        clients = clients.filter((client) => client !== res);
    });
});

app.get("/events/publish", (req, res) => {
    const newData = { data: "This is a new message" };

    clients.forEach(client => {
        client.send(newData);
    });

    clients = [];

    res.status(204).end();
});


const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
>>>>>>> main
