const db = require("../models")
const Zone = db.zone

exports.create = (req, res) => {

    const zone = {
        nomZone: req.body.nomZone
    }

    Zone.create(zone)
        .then(data =>{
            res.send({
                data,
                message: "Votre zone à bien été créée !"
            })
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Echec de la création de la zone ..."
            })
        })
}


exports.findAll = (req, res) => {

    Zone.findAll({include: [ "jeux" ]})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while researching the zone."
            })
        })
}