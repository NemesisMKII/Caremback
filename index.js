const express = require("express");
const port = 3000;
const sequelize = require('./database/db');
const Jokes = require('./database/jokes');
const cors = require('cors')

sequelize.sync().then(() => {console.log("la base de donnée est en activité !");})

const app = express();

app.use(express.json());
app.use(cors())

app.post("/jokes", async (req, res) => {
    await Jokes.create(req.body)
    res.status(201).send(req.body)
})

app.get("/jokes", async (req, res) => {
    const jokes = await Jokes.findAll();
    res.status(200).send(jokes)
})

app.get("/jokes/random", async (req, res) => {
    const joke = await sequelize.query("SELECT * FROM jokes ORDER BY random() LIMIT 1")
    res.status(200).send(joke);
})

app.get("/jokes/:id", async (req, res) => {
    requestedid = req.params.id;
    const joke = await Jokes.findOne({ where: { id: requestedid } });
    if (!joke) {
        res.status(404).send("Not Found !");
    }
    res.status(200).send(joke);
})

app.listen(port, () => {
    console.log(`Server is online at http://localhost:${port} !`)
})