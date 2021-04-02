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

exports.updatePremierContact = (req, res) => {

    const pk = {
        idFestival: req.params.idFestival,
        idParticipant: req.params.idParticipant,
    }

    const data = {
        premierContact: req.body.premierContact
    }


    ExposantSuivi.update(data, {
        where: {idFestival: pk.idFestival, idParticipant: pk.idParticipant}
    })
    .then(num => {
        res.send({
            message: "suiviExposant was updated successfully."
        });
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error updating suiviExposant"
        });
    });

}


exports.updateSecondContact = (req, res) => {

    const pk = {
        idFestival: req.params.idFestival,
        idParticipant: req.params.idParticipant,
    }

    const data = {
        secondContact: req.body.secondContact
    }

    console.log(data)


    ExposantSuivi.update(data, {
        where: {idFestival: pk.idFestival, idParticipant: pk.idParticipant}
    })
    .then(num => {
        res.send({
            message: "suiviExposant was updated successfully."
        });
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error updating suiviExposant"
        });
    });

}


exports.updateTroisiemeContact = (req, res) => {

    const pk = {
        idFestival: req.params.idFestival,
        idParticipant: req.params.idParticipant,
    }

    const data = {
        troisiemeContact: req.body.troisiemeContact
    }


    ExposantSuivi.update(data, {
        where: {idFestival: pk.idFestival, idParticipant: pk.idParticipant}
    })
    .then(num => {
        res.send({
            message: "suiviExposant was updated successfully."
        });
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error updating suiviExposant"
        });
    });

}


exports.updateStatus = (req, res) => {

    const pk = {
        idFestival: req.params.idFestival,
        idParticipant: req.params.idParticipant,
    }

    const data = {
        status: req.body.status
    }


    ExposantSuivi.update(data, {
        where: {idFestival: pk.idFestival, idParticipant: pk.idParticipant}
    })
    .then(num => {
        res.send({
            message: "suiviExposant was updated successfully."
        });
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error updating suiviExposant"
        });
    });

}

exports.updatePlace = (req, res) => {

    const pk = {
        idFestival: req.params.idFestival,
        idParticipant: req.params.idParticipant,
    }

    const data = {
        place: req.body.place
    }


    ExposantSuivi.update(data, {
        where: {idFestival: pk.idFestival, idParticipant: pk.idParticipant}
    })
    .then(num => {
        res.send({
            message: "suiviExposant was updated successfully."
        });
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error updating suiviExposant"
        });
    });
}


exports.updateBesoinBenevol = (req, res) => {
    
    const pk = {
        idFestival: req.params.idFestival,
        idParticipant: req.params.idParticipant,
    }

    const data = {
        besoinBenevol: req.body.besoinBenevol
    }


    ExposantSuivi.update(data, {
        where: {idFestival: pk.idFestival, idParticipant: pk.idParticipant}
    })
    .then(num => {
        res.send({
            message: "suiviExposant was updated successfully."
        });
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error updating suiviExposant"
        });
    });
}