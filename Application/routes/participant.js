const { authJwt } = require("../../Authentication/middlewares");
const controller = require("../controllers/participant");

module.exports = function (app) {

    var router = require("express").Router()

    //Retrieve all participants
    router.get("/api/participants",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.findAll)
    
    router.get("/api/participants/:id",
    // [authJwt.verifyToken, authJwt.isAdmin],
    controller.findOne)

    router.delete("/api/participants/:id",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.delete)

    router.post("/api/participants/",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.create)

    router.put("/api/participants/:id",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.update)
    
     //Retrieve zones of the current festival
     router.get("/api/custom/participants",
     controller.findAllCurrent)

    app.use('', router)

}
