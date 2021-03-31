const db = require("../models")
const Zone = db.zone
const festivalController = require("./festival");
const jeuExpose = db.jeuExpose
const jeu = db.jeu



exports.create = (req, res) => {
    console.log("1")
    const zone = {
        nomZone: req.body.nomZone,
        festivalFK: req.body.festivalFK
    }

    Zone.create(zone)
        .then(data => {
            res.send({
                data,
                message: "Votre zone à bien été créée !"
            })
        })
        .catch(err => {
            console.log(err)
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

    let idFestival = await festivalController.getCurrentFestivalId()

    console.log(idFestival)

    Zone.findAll({
        include:
            [{ model: jeuExpose, as: 'jeux', include: [{ model: jeu, as: "jeu" }] }],
        where: { festivalFK: idFestival }
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message: err.message || "Some error occurred while researching the zone."
            })
        })
}