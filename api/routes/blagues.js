const express = require('express');
const router = express.Router();

const BlaguesController = require("../controllers/blagues")

router.get("/", BlaguesController.blagues_get_all);

router.post('/', BlaguesController.blague_create);

module.exports = router