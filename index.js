const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json())

app.listen(
  PORT,
  () => console.log(`It's alive on http://localhost:${PORT}`)
)

const blagueRoutes = require('./api/routes/blagues');

app.use("/blagues", blagueRoutes);
