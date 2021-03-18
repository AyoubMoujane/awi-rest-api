var mysql = require('mysql'); 
const db;

exports.getAllParticipants = (req, res) => {
    let sql = "SELECT * FROM Participant"

    // TODO : update to materialize

    db.query(sql, function (err, result) {
        if (err) {
            res.status(500).send({ message: err })
            return
    };
        console.log("Result: " + result);
        res.status(200).send({ participants: result })
  });
}