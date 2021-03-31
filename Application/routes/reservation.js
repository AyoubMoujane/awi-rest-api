const { authJwt } = require("../../Authentication/middlewares");
const controller = require("../controllers/reservation");

module.exports = function (app) {
    var router = require("express").Router()

    //Create a new reservation
    router.post("/",
    // [authJwt.verifyToken],
    controller.create)

    //Retrieve all reservations
    router.get("/", 
    // [authJwt.verifyToken],
    controller.findAll)

    //Retrieve a single reservation with id
    router.get("/:id",
    // [authJwt.verifyToken],
    controller.findOne)

    //Update a reservation with id
    router.put("/:id",
    // [authJwt.verifyToken],
    controller.update)

    //Delete a reservation with id
    router.delete("/:id",
    //[authJwt.verifyToken],
    controller.delete)

    //Retrieve a single reservation with id
    router.get("/espacesReserves/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.findEspacesReserveByReservation)

    app.use('/api/reservations', router)

}