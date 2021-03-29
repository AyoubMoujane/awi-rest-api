const db = require("../models")
const ExposantStatus = db.exposantStatus

exports.findStatusExposant = (req, res) => {

    ExposantStatus.findAll({ include: ["suivisExposants"] })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred..."
            })
        })
}