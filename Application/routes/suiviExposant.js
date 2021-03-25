const { authJwt } = require("../../Authentication/middlewares");
const controller = require("../controllers/suiviExposant");

module.exports = function (app) {
    var router = require("express").Router()

    //Create a new Zone
    router.post("/",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.create)

    //Retrieve all suiviExposant for a festival
    router.get("/", 
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.findAllForFestival)
    

    app.use('/api/suiviExposant', router)

}