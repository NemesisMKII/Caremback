const blagues = require("../json/blagues.json");

exports.blagues_get_all = (req, res) => {
    res.status(200).send({
        message: "Bien ouej !"
    })
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