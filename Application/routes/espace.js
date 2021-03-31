const { authJwt } = require("../../Authentication/middlewares");
const controller = require("../controllers/espace");

module.exports = function (app) {
    var router = require("express").Router()

    //Retrieve a single reservation with id
    router.get("/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.findOne)

    app.use('/api/espace', router)

}