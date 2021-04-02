const { authJwt } = require("../../Authentication/middlewares");
const controller = require("../controllers/reservation");

module.exports = function (app) {
    var router = require("express").Router()

    //Create a new reservation
    router.post("/reservations/",
    // [authJwt.verifyToken],
    controller.create)

    //Retrieve all reservations
    router.get("/reservations", 
    // [authJwt.verifyToken],
    controller.findAll)

    //Retrieve a single reservation with id
    router.get("/reservations/:id",
    // [authJwt.verifyToken],
    controller.findOne)

    //Update a reservation with id
    router.put("/reservations/:id",
    // [authJwt.verifyToken],
    controller.update)

    //Delete a reservation with id
    router.delete("/reservations/:id",
    //[authJwt.verifyToken],
    controller.delete)

    //Retrieve a single reservation with id
    router.get("/reservations/espacesReserves/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.findEspacesReserveByReservation)


    router.get("/reservationExposant/:festival&:participantReservation",
 //   [authJwt.verifyToken, authJwt.isAdmin],
    controller.findReservationByParticipant)


    router.get("/reservationExposantByFestival/:festival",
 //   [authJwt.verifyToken, authJwt.isAdmin],
    controller.findReservationByFestival)






    app.use('/api', router)

}