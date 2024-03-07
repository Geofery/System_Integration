import express from "express";
//ssh -R roed:80:127.0.0.1:8080 serveo.net 
//nodemon app.js
//https://github.com/Geofery/webhooks/settings/hooks
//Lav webhook med den rigtige url, url hedder: https://roed.serveo.net/githubwebhookform
//Hvis ssh -R er kørt og den har lavet en server. 
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post("/githubwebhookjson", (req, res) => {
    console.log(req.body);
    res.sendStatus(204);
});

app.post("/githubwebhookform", (req, res) => {
    console.log(req.body);
    res.sendStatus(204);
});

app.listen(8080, () => console.log("server is running on port", 8080));

