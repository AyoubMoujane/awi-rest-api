module.exports = {
    HOST: "festival-instance-db-1.cdx53j5ivoeh.eu-west-3.rds.amazonaws.com",
    USER: "admin",
    PASSWORD: "Polytech",
    DB: "FestivalDuJeu",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};