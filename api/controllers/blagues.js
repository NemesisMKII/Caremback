const blagues = require("../json/blagues.json");
const fonctions = require("../utilities/fonctions");

exports.blague_get = (req, res) => {
  const blague = blagues.find(b => b.id === parseInt(req.params.id))
  if (!blague) {
    res.status(404).send("oui")
  }
}

exports.blagues_get_all = (req, res) => {
  res.status(200).send(blagues)
}

exports.blague_get_random = (req, res) => {
  res.status(200).send(blagues[fonctions.random(0, blagues.length)])
}

exports.blague_create = (req, res) => {
    const {question} = req.body
    const {response} = req.body
  
    if (!question) {
      res.status(418).send({message: "Il faut une question !"})
    }
  
    if (!response) {
      res.status(418).send({message: "Il faut une réponse !"})
    }
  
    res.send({
      blagues: blagues,
      blague: question,
      reponse: response
    })
}