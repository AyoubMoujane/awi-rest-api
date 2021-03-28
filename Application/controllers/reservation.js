const db = require("../models")
const Reservation = db.reservation
const Op = db.Sequelize.Op


exports.create = (req, res) => {

    // Valide request
    if (!req.body.dateReservation) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }


    
    const reservation = {
        dateReservation: req.body.dateReservation,
        prix: req.body.prix,
        remise: req.body.remise,
        factureEnvoye: req.body.factureEnvoye,
        facture: req.body.facture,
        festival: req.body.festival,
        participantReservation: req.body.participantReservation,
        dateModification: req.body.dateModification


    }

    Reservation.create(reservation)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Reservation."
            })
            console.log(err.message)
        })
    


}

exports.findAll = (req, res) => {

    Reservation.findAll({
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while searching the Reservation."
                
            })
            console.log(err.message)
        })
}

exports.findOne = (req, res) => {
    const id = req.params.id

    Reservation.findByPk(id)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Reservation with id=" + id
            })
        })
}

exports.update = (req, res) => {
    const id = req.params.id;
    Reservation.update(req.body, {
        where: { idReservation: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Reservation was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Reservation with id=${id}. Maybe Reservation was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Reservation with id=" + id
            });
        });
};


exports.delete = (req, res) => {

    let id = req.params.id

    // Valid request
    if (!id) {
        res.status(400).send({
            message: "Missing data!"
        });
        return;
    }

    Reservation.destroy({ where: { idReservation: id } })
        .then(() => {
            res.status(204).end()
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Reservation."
            })
        })
}
