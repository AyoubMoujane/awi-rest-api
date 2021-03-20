const Participant = require("../models/participant")

exports.findAll = (req, res) => {
    Participant.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving participants."
            });
        });
};