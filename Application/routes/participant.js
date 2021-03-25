const { authJwt } = require("../../Authentication/middlewares");
const controller = require("../controllers/participant");

module.exports = function (app) {

    var router = require("express").Router()

    //Retrieve all participants
    router.get("/",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.findAll)

    router.delete("/:id",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.delete)

    router.post("/",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.create)

    router.put("/:id",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.update)

    app.use('/api/participants', router)

}
