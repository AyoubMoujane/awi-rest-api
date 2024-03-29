const db = require("../models")
const Festival = db.festival
const Espace = db.espace
const Op = db.Sequelize.Op

exports.create = (req, res) => {
    
    //Create a festival with espace
    const festival = {
        nomFestival: req.body.nomFestival,
        dateFestival: req.body.dateFestival,
        estCourant: req.body.estCourant ? req.body.estCourant : false,
    }

    Festival.create(festival)
        .then(data => {
            const EspaceEntrees = {
                nbTableMax : req.body.nbTableEntree,
                prixUnitaireTable : req.body.prixTableEntree,
                prixM2: req.body.prixM2Entree,
                festivalE: data.idFestival,
                typeEspace: 1
            }
            const EspaceAccueil = {
                nbTableMax : req.body.nbTableAccueil,
                prixUnitaireTable : req.body.prixTableAccueil,
                prixM2: req.body.prixM2Accueil,
                festivalE: data.idFestival,
                typeEspace: 2
            }
            const EspaceBuvette = {
                nbTableMax : req.body.nbTableBuvette,
                prixUnitaireTable : req.body.prixTableBuvette,
                prixM2: req.body.prixM2Buvette,
                festivalE: data.idFestival,
                typeEspace: 3
            }
            Espace.create(EspaceEntrees)
            Espace.create(EspaceAccueil)
            Espace.create(EspaceBuvette)


            res.send({
                data,
                message: "Votre festival à bien été créé !"
            })
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Echec de la création du festival ..."
            })
        })

}

exports.findAll = (req, res) => {

    Festival.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tutorial."
            })
        })
}

exports.findOne = (req, res) => {
    const id = req.params.id

    Festival.findByPk(id)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tutorial with id=" + id
            })
        })
}

exports.update = (req, res) => {
    const id = req.params.id;

    Festival.update(req.body, {
        where: { idFestival: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Festival was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Festival with id=${id}. Maybe Festival was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Festival with id=" + id
            });
        });
};


exports.delete = (req, res) => {
    const id = req.params.id;


    Festival.destroy(req.body, {
        where: { idFestival: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Festival was deleted successfully."
                });
            } else {
                res.send({
                    message: `Cannot delete Festival with id=${id}. Maybe Festival was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error deleting Festival with id=" + id
            });
        });
};