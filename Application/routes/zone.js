const { authJwt } = require("../../Authentication/middlewares");
const controller = require("../controllers/zone");

module.exports = function (app) {
    var router = require("express").Router()

    //Create a new Zone
    router.post("/",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.create)

    //Retrieve all Zones
    router.get("/", 
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.findAll)
    

    app.use('/api/zones', router)

}