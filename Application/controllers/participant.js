const db = require("../models")
const Participant = db.participant

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

exports.create = (req, res) => {

    // Valid request
    if (!req.body.nomParticipant || !req.body.editeurSeulement) {
        res.status(400).send({
            message: "Missing data!"
        });
        return;
    }

    //Create a participant
    const participant = {
        nomParticipant: req.body.nomParticipant,
        editeurSeulement: req.body.editeurSeulement,
    }

    Participant.create(participant)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Participant."
            })
        })
}