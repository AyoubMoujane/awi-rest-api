const db = require("../models")
const Jeu = db.jeu
const Op = db.Sequelize.Op

exports.create = (req, res) => {

    // Valide request
    if (!req.body.nomJeu) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    if (!req.body.age) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    //Create a game
    const jeu = {
        nomJeu: req.body.nomJeu,
        nbJoueurMin: req.body.nbJoueurMin,
        nbJoueurMax: req.body.nbJoueurMax,
        age: req.body.age,
        duree: req.body.duree,
        consigne: req.body.consigne,
        prototype: req.body.prototype,
        type: req.body.type,
        editeur: req.body.editeur

    }

    Jeu.create(jeu)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Game."
            })
        })
    


}

exports.findAll = (req, res) => {

    Jeu.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while searching the Jeux."
            })
        })
}

exports.findOne = (req, res) => {
    const id = req.params.id

    Jeu.findByPk(id)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Jeu with id=" + id
            })
        })
}

exports.update = (req, res) => {
    const id = req.params.id;
    Jeu.update(req.body, {
        where: { idJeu: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Jeu was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Jeu with id=${id}. Maybe Jeu was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Jeu with id=" + id
            });
        });
};


exports.delete = (req, res) => {
    const id = req.params.id;
    Jeu.destroy(req.body,{
        where: { idJeu: id },
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Jeu was deleted successfully."
                });
            } else {
                res.send({
                    message: `Cannot delete Jeu with id=${id}. Maybe Jeu was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error deleting Jeu with id=" + id
            });
        });
};