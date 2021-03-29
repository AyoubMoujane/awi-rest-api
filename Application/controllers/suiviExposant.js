const db = require("../models")
const ExposantSuivi = db.exposantSuivi
const ExposantStatus = db.exposantStatus
const Reservation = db.reservation
const ReservationEspace = db.reservationEspace


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
        include : ["statusExposant", "participant"],
        where : { idFestival : req.params.id},
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred..."
            })
        })
}




// TODO: à voir si ca va dans reservation controller
exports.findReservationByPk = (req, res) => {

    const id = req.params.id

    Reservation.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred..."
            })
        })
}

exports.findEspacesReservesByPk = (req, res) => {

    const idFestival = req.params.idFestival
    const idReservation = req.params.idReservation

    ReservationEspace.findAll({
        where: {
            idFestival: idFestival,
            idReservation: idReservation
        }
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred..."
            })
        })
}