const db = require("../models")
const ReservationEspace = db.reservationEspace
const espace = db.espace
const Op = db.Sequelize.Op


exports.findEspacesReserveByReservation = (req, res) => {

    ReservationEspace.findAll({
        include : ["espace"],
        where : { idReservation : req.params.id}
    })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error retrieving Reservation with id=" + req.params.id
            })
        })
}
