const db = require("../models")
const Espace = db.espace
const Op = db.Sequelize.Op

exports.create = (req, res) => {
    
    const espace = {
        nbTableMax: req.body.nbTableMax,
        prixUnitaireTable: req.body.prixUnitaireTable,
        prixM2: req.body.prixM2,
        festivalE: req.body.festivalE,
        typeEspace: req.body.typeEspace
    }

    Espace.create(espace)
        .then(data => {
            res.send({data, message: "L'espace associé au festival à bien été créé !" })
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Erreur pendant la creation de l'espace ..."
            })
        })
}