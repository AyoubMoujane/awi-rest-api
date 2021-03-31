const db = require("../models")
const Zone = db.zone
const festivalController = require("./festival");


exports.create = (req, res) => {

    const zone = {
        nomZone: req.body.nomZone
    }

    Zone.create(zone)
        .then(data => {
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

    Zone.findAll({ include: ["jeux"] })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while researching the zone."
            })
        })
}

exports.findAllCurrent = async (req, res) => {

    const idFestival = await festivalController.getCurrentFestivalId

    Zone.findAll({ include: ["jeux"], where: { festivalFK: idFestival } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while researching the zone."
            })
        })
}