const { authJwt } = require("../../Authentication/middlewares");
const controller = require("../controllers/statusExposant");

module.exports = function (app) {
    var router = require("express").Router()

    //Retrieve all statusExposnant
    router.get("/", 
//    [authJwt.verifyToken, authJwt.isAdmin],
    controller.findStatusExposant)

    app.use('/api/festival/statusExposant', router)

}