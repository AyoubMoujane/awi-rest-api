const db = require("../../Authentication/models")
const User = db.user
const Role = db.role

exports.allAccess = (req, res) => {
    res.status(200).send({ message: "Public Content." });
};

// exports.adminHome = (req, res) => {
//     res.status(200).send({ message: "Admin Home." });
// };

// exports.organisatorHome = (req, res) => {
//     res.status(200).send({ message: "Organisator Home." });
// };



exports.findAllOrganisators = (req, res) => {

    Role.findOne(
        {
            name: "organisator"
        },
        (err, role) => {
            if (err) {
                res.status(500).send({ message: err })
                return
            }
            User.find(
                {
                    roles: role._id
                },
                (err, users) => {
                    if (err) {
                        res.status(500).send({ message: err })
                        return
                    }
                    res.send({ users })

                }
            )
        }
    )
}

exports.deleteOrganisator = (req, res) => {
    const id = req.params.id
    
    User.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Organisator with id=${id}. Maybe Organisator was not found!`
                });
            } else {
                res.send({
                    message: "Organisator was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Could not delete Organisator with id=" + id
            });
        });
}