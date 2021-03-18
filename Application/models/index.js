const config = require("../config/db");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        logging: false,

        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


// Set up our model


db.zone = require("../models/zone")(sequelize, Sequelize)
db.espace = require("../models/espace")(sequelize, Sequelize)
//db.espaceType = require("../models/espaceType")(sequelize, Sequelize)
db.participant = require("../models/participant")(sequelize, Sequelize)
db.contact = require("../models/contact")(sequelize, Sequelize)
//db.jeu = require("../models/jeu")(sequelize, Sequelize)
//db.jeuType = require("../models/jeuType")(sequelize, Sequelize)
//db.facture = require("../models/facture")(sequelize, Sequelize)
//db.reservation = require("../models/reservation")(sequelize, Sequelize)
//db.festival = require("../models/festival")(sequelize, Sequelize)
//db.exposantStatus = require("../models/exposantStatus")(sequelize, Sequelize)



// Relation One to Many

db.participant.hasMany(db.contact, { as: "contacts"})
db.contact.belongsTo(db.participant, {
    foreignKey: "participant",
    as: "Participant",
})

/*
db.festival.hasMany(db.reservation, { as: "reservations"})
db.reservation.belongsTo(db.festival, {
    foreignKey: "festival",
    as: "Festival",
})
*/



// Relation One to One
/*
db.reservation.hasOne(db.facture, {
    foreignKey: 'reservation'
})
db.facture.belongsTo(db.reservation)
*/

/*
db.participant.hasOne(db.reservation, {
    foreignKey: 'participant'
})
db.reservation.belongsTo(db.participant)

*/


// Relation Many to Many
/*
db.festival.belongsToMany(db.participant, {
    through: "SuiviExposant",
    as: ""
})
*/



module.exports = db;