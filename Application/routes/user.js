const { authJwt } = require("../../Authentication/middlewares");
const controller = require("../controllers/user");

module.exports = function (app) {
    var router = require("express").Router()

    router.get("/landing", controller.allAccess);


    // router.get(
    //     "/organisator/home", 
    //     [authJwt.verifyToken, authJwt.isOrganisator], 
    //     controller.organisatorHome
    // );

    // router.get(
    //     "/admin/home",
    //     [authJwt.verifyToken, authJwt.isAdmin],
    //     controller.adminHome
    // );

    router.get(
        "/admin/organisators",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.findAllOrganisators
    );

    router.delete(
        "/admin/organisator/:id",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.deleteOrganisator
    )


    app.use("/api", router)

    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });


};