checkEmptyField = (req, res, next) => {

    if (!req.body.nomFestival) {
        console.log(req.body.data.nomFestival)
        res.status(400).send({ message: "Veuillez remplir le nom du festival svp !" });
        return;
    }
    if (!req.body.dateFestival) {
        res.status(400).send({ message: "Veuillez remplir la date svp !" });
        return;
    }
    if (!req.body.nbTableEntree) {
        res.status(400).send({ message: "Veuillez remplir le nombre de tables maximum de l'espace Entree svp !" });
        return;
    }
    if (!req.body.prixTableEntree) {
        res.status(400).send({ message: "Veuillez remplir le prix unitaire d'une table pour l'espace Entree svp !" });
        return;
    }

    if (!req.body.nbTableAccueil) {
        console.log(req.body.data.nbTableMax)
        res.status(400).send({ message: "Veuillez remplir le nombre de tables maximum de l'espace Accueil svp !" });
        return;
    }
    if (!req.body.prixTableAccueil) {
        res.status(400).send({ message: "Veuillez remplir le prix unitaire d'une table pour l'espace Accueil svp !" });
        return;
    }

    if (!req.body.nbTableBuvette) {
        console.log(req.body.data.nbTableMax)
        res.status(400).send({ message: "Veuillez remplir le nombre de tables maximum de l'espace Buvette svp !" });
        return;
    }
    if (!req.body.prixTableBuvette) {
        res.status(400).send({ message: "Veuillez remplir le prix unitaire d'une table pour l'espace Buvette svp !" });
        return;
    }
    
    if (!req.body.prixM2Entree) {
        res.status(400).send({ message: "Veuillez remplir le prix du m2 de l'espace Entree svp !" });
        return;
    }

    if (!req.body.prixM2Accueil) {
        res.status(400).send({ message: "Veuillez remplir le prix du m2 de l'espace Entree svp !" });
        return;
    }
    if (!req.body.prixM2Buvette) {
        res.status(400).send({ message: "Veuillez remplir le prix du m2 de l'espace Entree svp !" });
        return;
    }
    next()
}

const festivalMiddlewares = {
    checkEmptyField
}

module.exports = festivalMiddlewares