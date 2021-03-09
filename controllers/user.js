exports.allAccess = (req, res) => {
    res.status(200).send({ message : "Public Content."});
};

exports.adminHome = (req, res) => {
    res.status(200).send({ message : "Admin Home."});
};

exports.organisatorHome = (req, res) => {
    res.status(200).send({ message : "Organisator Home."});
};