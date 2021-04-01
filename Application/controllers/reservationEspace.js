const db = require("../models")
const ReservationEspace = db.reservationEspace
const Op = db.Sequelize.Op




exports.create = (req, res) => {


    
    const reservationEspace = {
        idReservation : req.body.idReservation,
        idEspace : req.body.idEspace,
        nbTable : req.body.nbTable,
        nbM2 : req.body.nbM2

    }

    ReservationEspace.create(reservationEspace)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the reservationEspace."
            })
            console.log(err.message)
        })
    


}

exports.findAll = (req, res) => {

    ReservationEspace.findAll({
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while searching the reservationEspace."
                
            })
            console.log(err.message)
        })
}

exports.findOne = (req, res) => {
    const idReservation = req.params.idReservation;
    const idEspace = req.params.idEspace

    ReservationEspace.findAll( {
     where: { idReservation: idReservation, idEspace : idEspace }
    })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving reservationEspace with idReservation = "+idReservation+" idEspace = "+idEspace
            })
        })
}

exports.update = (req, res) => {
    const idReservation = req.params.idReservation;
    const idEspace = req.params.idEspace
    ReservationEspace.update(req.body, {
        where: { idReservation: idReservation, idEspace : idEspace }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "reservationEspace was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update reservationEspace with idReservation=${idReservation}+ idEspace=${idEspace}. Maybe jeuExpose was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating reservationEspace with idReservation=${idReservation} + idEspace=${idEspace}"
            });
        });
};


exports.delete = (req, res) => {

    const idReservation = req.params.idReservation;
    const idEspace = req.params.idEspace

    ReservationEspace.destroy({ where: { idReservation: idReservation, idEspace : idEspace } })
        .then(() => {
            res.status(204).end()
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message: err.message || "Some error occurred while deleting the reservationEspace."
            })
        })
}
