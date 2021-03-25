const db = require("../models")
const ExposantSuivi = db.exposantSuivi
const { Op } = require("sequelize");

exports.create = (req, res) => {

    const exposantSuivi = {
        idFestival: req.body.idFestival,
        idParticipant: req.body.idParticipant,
        reponse: 0,
        commentaires: "Aucun",
        jeuxRentres: false,
        besoinBenevol: false,
        premierContact: Date.now(),
        secondContact: Date.now(),
        troisiemeContact: Date.now()
    }

    ExposantSuivi.create(exposantSuivi)
        .then(data => {
            res.send({
                data,
                message: "Le suivi à bien été créé !"
            })
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Echec de la création du suivi ..."
            })
        })
}


exports.findAllForFestival = (req, res) => {

    ExposantSuivi.findAll({ 
        where : req.body.idFestival
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while researching the zone."
            })
        })
}