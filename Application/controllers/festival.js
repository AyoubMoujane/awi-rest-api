const db = require("../models")
const Festival = db.festival
const Espace = db.espace
const ExposantSuivi = db.exposantSuivi
const Participant = db.participant
const Op = db.Sequelize.Op

const { sequelize } = require("../models/index")


exports.create = (req, res) => {


    //Create a festival with espace
    const festival = {
        nomFestival: req.body.nomFestival,
        dateFestival: req.body.dateFestival,
        estCourant: req.body.estCourant ? req.body.estCourant : false,
    }

    console.log(festival.nomFestival)

    Festival.create(festival)
        .then(data => {

            const idFestival = data.idFestival
            // création des 3 espaces liées au festival

            const EspaceEntrees = {
                nbTableMax: req.body.nbTableEntree,
                prixUnitaireTable: req.body.prixTableEntree,
                prixM2: req.body.prixM2Entree,
                festivalE: idFestival,
                typeEspace: 1
            }
            const EspaceAccueil = {
                nbTableMax: req.body.nbTableAccueil,
                prixUnitaireTable: req.body.prixTableAccueil,
                prixM2: req.body.prixM2Accueil,
                festivalE: idFestival,
                typeEspace: 2
            }
            const EspaceBuvette = {
                nbTableMax: req.body.nbTableBuvette,
                prixUnitaireTable: req.body.prixTableBuvette,
                prixM2: req.body.prixM2Buvette,
                festivalE: idFestival,
                typeEspace: 3
            }
            Espace.create(EspaceEntrees)
            Espace.create(EspaceAccueil)
            Espace.create(EspaceBuvette)

            console.log("eee")

            // TODO: A modifier
            // Création d'un suivi pour chaque exposant/editeur

            Participant.findAll()
                .then(data => {
                    data.map(participant => {

                        const exposantSuivi = {
                            idFestival: idFestival,
                            idParticipant: participant.idParticipant,
                            jeuxRentres: false,
                            besoinBenevol: false,
                            place: false,
                            status: 3,
                        }

                        ExposantSuivi.create(exposantSuivi)

                    })
                })
                .catch(err => {
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while retrieving participants."
                    });
                });


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

    Festival.findAll({ include: ["espaces"] })
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

    const id = req.params.id

    const infoFestival = {
        nomFestival: req.body.nomFestival,
        dateFestival: req.body.dateFestival,
        estCourant: req.body.estCourant

    }

    const infoEspaceEntree = {
        nbTableMax: req.body.nbTableEntree
    }

    const infoEspaceAccueil = {
        nbTableMax: req.body.nbTableAccueil
    }

    const infoEspaceBuvette = {
        nbTableMax: req.body.nbTableBuvette
    }

    Festival.update(infoFestival, {
        where: { idFestival: id }
    })
        .then(num => {

            Espace.update(infoEspaceEntree, {
                where: { typeEspace: 1, festivalE: id }
            })

            Espace.update(infoEspaceAccueil, {
                where: { typeEspace: 2, festivalE: id }
            })

            Espace.update(infoEspaceBuvette, {
                where: { typeEspace: 3, festivalE: id }
            })

            res.send({
                message: "Festival was updated successfully."
            });

        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error updating Festival with id=" + infoFestival.id
            });
        });
};

exports.switchCurrentFestival = async (req, res) => {

    console.log(req.body)

    const previousCurrentFestival = req.body.previousCurrentFestival
    const newCurrentFestival = req.body.newCurrentFestival

    try {

        const result = await sequelize.transaction(async (t) => {

            await Festival.update(newCurrentFestival, {
                where: { idFestival: newCurrentFestival.idFestival }
            })

            // In cas there are no previousCurrentFestival
            if (previousCurrentFestival.idFestival) {
                await Festival.update(previousCurrentFestival, {
                    where: { idFestival: previousCurrentFestival.idFestival }
                })
            }


            return;

        });

        res.status(200).send({ message: "Updated festival successfully" })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: error.message || "Error updating Festival"
        });
    }
}


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

exports.getCurrent = (req, res) => {

    Festival.findOne({ where: { estCourant: 1 } })
        .then(festival => {
            if (festival === null) {
                res.status(500).send({
                    message: "No current festival !"
                });
            } else {
                res.status(200).send({
                    festival
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err
            });
        });

}

exports.getCurrentFestivalId = Festival.findOne({ where: { estCourant: 1 } })
    .then(festival => {
        return festival.idFestival
    })
    .catch(err => {
        throw err
    });