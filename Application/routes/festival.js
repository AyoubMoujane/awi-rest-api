const { authJwt } = require("../../Authentication/middlewares");
const controller = require("../controllers/festival");
const festivalMiddlewares = require("../middlewares/festival")

module.exports = function (app) {
    var router = require("express").Router()

    //Create a new Festival
    router.post("/",
    [festivalMiddlewares.checkEmptyField],
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.create)

    //Retrieve all Festivals
    router.get("/", 
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.findAll)

    //Retrieve a single Festival with id
    router.get("/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.findOne)

    //Update a Festival with id
    router.put("/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.update)

    //Delete a Festival with id
    router.delete("/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.delete)

    

    app.use('/api/festivals', router)

}