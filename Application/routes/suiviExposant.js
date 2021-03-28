const { authJwt } = require("../../Authentication/middlewares");
const controller = require("../controllers/suiviExposant");

module.exports = function (app) {
    var router = require("express").Router()

    //Create a new Zone
    router.post("/",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.create)

    //Retrieve all suiviExposant for a festival
    router.get("/:id", 
//    [authJwt.verifyToken, authJwt.isAdmin],
    controller.findAllForFestival)
    
    //Retrieve all statusExposnant
    router.get("/statusExposant", 
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.findStatusExposant)


    //TODO: reservation
    //Retrieve all statusExposnant
    router.get("/reservation/:id", 
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.findReservationByPk)

    router.get("/reservation/espacesReserves", 
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.findEspacesReservesByPk)

    app.use('/api/festival/suiviExposant', router)

}