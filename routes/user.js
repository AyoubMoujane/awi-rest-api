const { authJwt } = require("../middlewares");
const controller = require("../controllers/user");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });


    app.get("/api/landing", controller.allAccess);

    app.get(
        "/api/organisator/home", 
        [authJwt.verifyToken, authJwt.isOrganisator], 
        controller.organisatorHome
    );

    app.get(
        "/api/admin/home",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.adminHome
    );
};