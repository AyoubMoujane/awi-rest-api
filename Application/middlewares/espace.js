checkEmptyField = (req, res, next) => {

    if (!req.body.nbTableMax) {
        res.status(400).send({ message: "Veuillez remplir le nombre de tables maximum svp !" });
        return;
    }
    if (!req.body.prixUnitaireTable) {
        res.status(400).send({ message: "Veuillez remplir le prix unitaire de la table svp !" });
        return;
    }
    if (!req.body.prixM2) {
        res.status(400).send({ message: "Veuillez remplir le prix du m2 de l'espace svp !" });
        return;
    }
    next()

}

const espaceMiddlewares = {
    checkEmptyField
}

module.exports = espaceMiddlewares