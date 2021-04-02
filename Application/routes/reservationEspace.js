const { authJwt } = require("../../Authentication/middlewares");
const controller = require("../controllers/reservationEspace");

module.exports = function (app) {
    var router = require("express").Router()

    //Create a new reservationEspace
    router.post("/",
    // [authJwt.verifyToken],
    controller.create)

    //Retrieve all reservationEspace
    router.get("/", 
    // [authJwt.verifyToken],
    controller.findAll)

    //Retrieve a single reservationEspace with id
    router.get("/:idReservation&:idEspace",
    // [authJwt.verifyToken],
    controller.findOne)

    //Update a reservationEspace with id
    router.put("/:idReservation&:idEspace",
    // [authJwt.verifyToken],
    controller.update)

    //Delete a reservationEspace with id
    router.delete("/:idReservation&:idEspace",
    //[authJwt.verifyToken],
    controller.delete)



    app.use('/api/reservationsEspaces', router)

}