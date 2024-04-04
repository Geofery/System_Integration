import express from "express";
import cors from "cors";

const app = express();
//Global CORS
app.use(cors());

/*app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});*/



app.get("/timestamp", (req, res) => {
    res.send({ time: new Data() });
});

//Kun access på endpoint
/*app.get("/timestamp", cors(), (req, res) => {
    res.send({time: new Data()});
});*/

const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));



