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
db.espaceType = require("../models/espaceType")(sequelize, Sequelize)
db.participant = require("../models/participant")(sequelize, Sequelize)
db.contact = require("../models/contact")(sequelize, Sequelize)
db.jeu = require("../models/jeu")(sequelize, Sequelize)
db.jeuType = require("../models/jeuType")(sequelize, Sequelize)
db.facture = require("../models/facture")(sequelize, Sequelize)
db.reservation = require("../models/reservation")(sequelize, Sequelize)
db.festival = require("../models/festival")(sequelize, Sequelize)
db.exposantStatus = require("../models/exposantStatus")(sequelize, Sequelize)
db.exposantSuivi = require("../models/exposantSuivi")(sequelize, Sequelize)
db.jeuExpose = require("../models/jeuExpose")(sequelize, Sequelize)
db.reservationEspace = require("../models/reservationEspace")(sequelize, Sequelize)


// Relation One to Many

db.participant.hasMany(db.contact, { as: "contacts", foreignKey: "participant" })
db.contact.belongsTo(db.participant, {
    foreignKey: "participant",
    as: "Participant",
})

db.festival.hasMany(db.reservation, { as: "reservations", foreignKey: "festival" })
db.reservation.belongsTo(db.festival, {
    foreignKey: "festival",
    as: "Festival",
})

db.zone.hasMany(db.jeuExpose, { as: "jeux", foreignKey: "zone" })
db.jeuExpose.belongsTo(db.zone, {
    foreignKey: "zone",
    as: "Zone",
})

// TO DO : check si ça fait pas d'erreur

db.jeuType.hasMany(db.jeu, { foreignKey: "type", as: "jeux" })
db.jeu.belongsTo(db.jeuType, {
    foreignKey: "type",
    as: "jeuType",
})

db.participant.hasMany(db.jeu, { foreignKey: "editeur", as: "jeux" })
db.jeu.belongsTo(db.participant, {
    foreignKey: "editeur",
    as: "participant",
})

db.festival.hasMany(db.espace, { as: "espaces", foreignKey: "festivalE" })
db.espace.belongsTo(db.festival, {
    foreignKey: "festivalE",
    as: "Festival"
})

db.espaceType.hasMany(db.espace, { as: "espaces", foreignKey: "typeEspace" })
db.espace.belongsTo(db.espaceType, {
    foreignKey: "typeEspace",
    as: "TypeEspace"
})

db.exposantStatus.hasMany(db.exposantSuivi, { as: "suivisExposants", foreignKey:"status" })
db.exposantSuivi.belongsTo(db.exposantStatus, {
    foreignKey: "status",
    as: "statusExposant"
})

db.participant.hasMany(db.exposantSuivi, { as: "suivisExposants", foreignKey:"idParticipant" })
db.exposantSuivi.belongsTo(db.participant, {
    foreignKey: "idParticipant",
    as: "participant"
})

db.espace.hasMany(db.reservationEspace , { foreignKey:"idEspace" })
db.reservationEspace.belongsTo(db.espace, {
    foreignKey: "idEspace",
    as: "espace"
})

db.jeu.hasMany(db.jeuExpose, { foreignKey:"idJeu" })
db.jeuExpose.belongsTo(db.jeu, {
    foreignKey: "idJeu",
    as: "jeu"
})

db.reservation.hasMany(db.jeuExpose, { foreignKey:"idReservation" })
db.jeuExpose.belongsTo(db.reservation, {
    foreignKey: "idReservation",
    as: "reservation"
})

// Relation One to One
// db.participant.hasOne(db.reservation, {
//     as: "participantReservation",
//     foreignKey: 'participantReservation'
// })
// db.reservation.belongsTo(db.participant, {
//     foreignKey: "participantReservation",
//     as: "Participant"
// })

db.participant.hasMany(db.reservation, { as: "reservations", foreignKey: "participantReservation"})
db.reservation.belongsTo(db.participant, {
    foreignKey: "participantReservation",
    as: "Participant",
})





// Relation One to One

db.reservation.hasOne(db.facture, {
    foreignKey: 'reservation',
})
db.facture.belongsTo(db.reservation)




// Relation Many to Many
db.festival.belongsToMany(db.participant, {
    through: db.exposantSuivi,
    as: "participants",
    foreignKey: "idFestival"
})

db.participant.belongsToMany(db.festival, {
    through: db.exposantSuivi,
    as: "festivals",
    foreignKey: "idParticipant"
})

db.jeu.belongsToMany(db.reservation, {
    through: db.jeuExpose,
    as: "reservations",
    foreignKey: "idJeu"
})

db.reservation.belongsToMany(db.jeu, {
    through: db.jeuExpose,
    as: "jeux",
    foreignKey: "idReservation"
})


db.espace.belongsToMany(db.reservation, {
    through: db.reservationEspace,
    as: "reservations",
    foreignKey: "idEspace"
})

db.reservation.belongsToMany(db.espace, {
    through: db.reservationEspace,
    as: "espaces",
    foreignKey: "idReservation"
})

module.exports = sequelize



module.exports = db;

