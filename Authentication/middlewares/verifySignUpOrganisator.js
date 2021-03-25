const Validator = require('validator')

const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

checkDuplicateUsernameOrEmail = (req, res, next) => {

    //Username
    User.findOne({ username: req.body.username }).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        if (user) {
            res.status(400).send({ message: "Failed! Username is already in use!" });
            return;
        }
    })

    //Email
    User.findOne({ email: req.body.email }).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        if (user) {
            res.status(400).send({ message: "Failed! Email is already in use!" });
            return;
        }

        next()
    })
}

checkRolesExisted = (req, res, next) => {
    if (req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {
            if (!ROLES.includes(req.body.roles[i])) {
                res.status(400).send({
                    message: `Failed! Role ${req.body.roles[i]} does not exist!`
                });
                return
            }
        }
    }
    next()
}

checkPassword = (req, res, next) => {

    if (!Validator.isLength(req.body.password, { min: 6, max: 30})) {
        res.status(400).send({ message: "Password must be at least 6 characters!" });
    }

    if (!Validator.equals(req.body.password, req.body.password2)) {
        res.status(400).send({ message: "Passwords don't match!" });
    }
    next()
}

checkEmptyField = (req, res, next) => {
    if (!req.body.username) {
        res.status(400).send({ message: "Veuillez remplir le nom d'utilisateur svp !" });
        return;
    }
    if (!req.body.email) {
        res.status(400).send({ message: "Veuillez remplir l'email svp !" });
        return;
    }
    if (!req.body.password) {
        res.status(400).send({ message: "Veuillez remplir le mot de passe svp !" });
        return;
    }
    if (!req.body.password2) {
        res.status(400).send({ message: "Veuillez confirmé le mot de passe svp !" });
        return;
    }

    next()

}

const verifySignUp = {
    checkDuplicateUsernameOrEmail,
    checkRolesExisted,
    checkPassword,
    checkEmptyField
}

module.exports = verifySignUp

