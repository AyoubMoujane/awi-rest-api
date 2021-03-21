checkEmptyField = (req, res, next) => {

    if (!req.body.nomFestival) {
        res.status(400).send({ message: "Veuillez remplir le nom du festival svp !" });
        return;
    }
    if (!req.body.dateFestival) {
        res.status(400).send({ message: "Veuillez remplir la date svp !" });
        return;
    }
    next()
}

const festivalMiddlewares = {
    checkEmptyField
}

module.exports = festivalMiddlewares