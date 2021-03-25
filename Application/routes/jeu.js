const { authJwt } = require("../../Authentication/middlewares");
const controller = require("../controllers/jeu");

module.exports = function (app) {
    var router = require("express").Router()

    //Create a new jeu
    router.post("/",
    // [authJwt.verifyToken],
    controller.create)

    //Retrieve all Jeux
    router.get("/", 
    // [authJwt.verifyToken],
    controller.findAll)

    //Retrieve a single Jeux with id
    router.get("/:id",
    [authJwt.verifyToken],
    controller.findOne)

    //Update a Jeu with id
    router.put("/:id",
    // [authJwt.verifyToken],
    controller.update)

    //Delete a Jeu with id
    router.delete("/:id",
    //[authJwt.verifyToken],
    controller.delete)

    app.use('/api/jeux', router)

}