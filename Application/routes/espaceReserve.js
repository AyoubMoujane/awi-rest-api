const { authJwt } = require("../../Authentication/middlewares");
const controller = require("../controllers/espaceReserve");

module.exports = function (app) {
    var router = require("express").Router()

    //Retrieve a single reservation with id
    router.get("/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.findEspacesReserveByReservation)

    app.use('/api/espaceReserve', router)

}