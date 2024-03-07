import express from "express";

const app = express();

app.use(express.json());

app.post("/githubwebhookjson", (req, res) => {
    console.log(req.body);
    res.sendStatus(204);
});

app.listen(8080, () => console.log("server is running on port", 8080));

