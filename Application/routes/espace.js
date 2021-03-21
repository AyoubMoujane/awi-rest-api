const { authJwt } = require("../../Authentication/middlewares");
const controller = require("../controllers/espace");
const espaceMiddlewares = require("../middlewares/espace")


module.exports = function (app) {
    var router = require("express").Router()

    //Create a new space
    router.post("/",
    [espaceMiddlewares.checkEmptyField],
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.create)

    app.use('/api/espaces', router)

}