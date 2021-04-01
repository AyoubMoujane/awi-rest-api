const { authJwt } = require("../../Authentication/middlewares");
const controller = require("../controllers/suiviExposant");

module.exports = function (app) {
    var router = require("express").Router()


    //Retrieve all suiviExposant for a festival
    router.get("/festival/:id", 
//    [authJwt.verifyToken, authJwt.isAdmin],
    controller.findAllForFestival)

    // //TODO: reservation
    // //Retrieve all statusExposnant
    // router.get("/reservation/:id", 
    // [authJwt.verifyToken, authJwt.isAdmin],
    // controller.findReservationByPk)

    router.put("/premierContact/:idFestival&:idParticipant", 
//    [authJwt.verifyToken, authJwt.isAdmin],
    controller.updatePremierContact)

    router.put("/secondContact/:idFestival&:idParticipant", 
    //    [authJwt.verifyToken, authJwt.isAdmin],
    controller.updateSecondContact)

    router.put("/troisiemeContact/:idFestival&:idParticipant", 
    //    [authJwt.verifyToken, authJwt.isAdmin],
    controller.updateTroisiemeContact)

    router.put("/status/:idFestival&:idParticipant", 
    //    [authJwt.verifyToken, authJwt.isAdmin],
    controller.updateStatus)

    router.put("/place/:idFestival&:idParticipant", 
    //    [authJwt.verifyToken, authJwt.isAdmin],
    controller.updatePlace)

    router.put("/besoinBenevol/:idFestival&:idParticipant", 
    //    [authJwt.verifyToken, authJwt.isAdmin],
    controller.updateBesoinBenevol)

    



    app.use('/api/suiviExposant', router)

}