const { authJwt } = require("../../Authentication/middlewares");
const controller = require("../controllers/jeuExpose");

module.exports = function (app) {
    var router = require("express").Router()

    //Create a new jeuExpose
    router.post("/api/jeuxExposes/",
    // [authJwt.verifyToken],
    controller.create)

    //Retrieve all jeuExpose
    router.get("/api/jeuxExposes/", 
    // [authJwt.verifyToken],
    controller.findAll)

    //Retrieve a single jeuExpose with id
    router.get("/api/jeuxExposes/:idReservation&:idJeu",
    // [authJwt.verifyToken],
    controller.findOne)

    //Update a jeuExpose with id
    router.put("/api/jeuxExposes/:idReservation&:idJeu",
    // [authJwt.verifyToken],
    controller.update)

    //Delete a jeuExpose with id
    router.delete("/api/jeuxExposes/:idReservation&:idJeu",
    //[authJwt.verifyToken],
    controller.delete)

    //Delete a jeuExpose with id
    router.get("/api/custom/jeuxExposes",
    //[authJwt.verifyToken],
    controller.findAllCurrent)

    app.use('', router)

}