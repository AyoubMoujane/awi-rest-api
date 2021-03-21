const { authJwt } = require("../../Authentication/middlewares");
const controller = require("../controllers/participant");

module.exports = function (app) {

    var router = require("express").Router()

    //Retrieve all participants
    router.get("/",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.findAll)

    router.post("/:id",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.delete)

    app.use('/api/participants', router)

}
