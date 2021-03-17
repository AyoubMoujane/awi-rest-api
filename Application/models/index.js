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
db.participant = require("../models/participant")(sequelize, Sequelize)
db.contact = require("../models/contact")(sequelize, Sequelize)

db.participant.hasMany(db.contact, { as: "contact"})
db.contact.belongsTo(db.participant, {
    foreignKey: "participant"
})



module.exports = db;