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



    app.use('/api/suiviExposant', router)

}