const db = require("../models")
const JeuExpose = db.jeuExpose
const Op = db.Sequelize.Op


exports.create = (req, res) => {


    
    const jeuExpose = {
        idReservation : req.body.idReservation,
        idJeu : req.body.idJeu,
        quantiteExpose : req.body.quantiteExpose,
        quantiteDonation :req.body.quantiteDonation,
        quantiteTombola: req.body.quantiteTombola,
        estAmene: req.body.estAmene,
        estRecu : req.body.estRecu,
        estARenvoye : req.body.estARenvoye,
        aEteRenvoye : req.body.aEteRenvoye,
        estPlace: req.body.estPlace,
        zone : req.body.zone,



    }

    JeuExpose.create(jeuExpose)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the jeuExpose."
            })
            console.log(err.message)
        })
    


}

exports.findAll = (req, res) => {

    JeuExpose.findAll({
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while searching the jeuExpose."
                
            })
            console.log(err.message)
        })
}

exports.findOne = (req, res) => {
    const idReservation = req.params.idReservation;
    const idJeu = req.params.idJeu

    JeuExpose.findAll( {
        where: { idReservation: idReservation, idJeu : idJeu }
    })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving jeuExpose with id=" + id
            })
        })
}

exports.update = (req, res) => {
    const idReservation = req.params.idReservation;
    const idJeu = req.params.idJeu
    JeuExpose.update(req.body, {
        where: { idReservation: idReservation, idJeu : idJeu }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "jeuExpose was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update jeuExpose with id=${idReservation}. Maybe jeuExpose was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating jeuExpose with id=" + idReservation
            });
        });
};


exports.delete = (req, res) => {

    const idReservation = req.params.idReservation;
    const idJeu = req.params.idJeu

    JeuExpose.destroy({ where: { idReservation: idReservation, idJeu : idJeu } })
        .then(() => {
            res.status(204).end()
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message: err.message || "Some error occurred while creating the jeuExpose."
            })
        })
}
