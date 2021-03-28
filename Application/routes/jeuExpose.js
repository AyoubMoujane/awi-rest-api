const { authJwt } = require("../../Authentication/middlewares");
const controller = require("../controllers/jeuExpose");

module.exports = function (app) {
    var router = require("express").Router()

    //Create a new jeuExpose
    router.post("/",
    // [authJwt.verifyToken],
    controller.create)

    //Retrieve all jeuExpose
    router.get("/", 
    // [authJwt.verifyToken],
    controller.findAll)

    //Retrieve a single jeuExpose with id
    router.get("/:idReservation&:idJeu",
    // [authJwt.verifyToken],
    controller.findOne)

    //Update a jeuExpose with id
    router.put("/:idReservation&:idJeu",
    // [authJwt.verifyToken],
    controller.update)

    //Delete a jeuExpose with id
    router.delete("/:idReservation&:idJeu",
    //[authJwt.verifyToken],
    controller.delete)

    app.use('/api/jeuxExposes', router)

}