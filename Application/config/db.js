module.exports = {
    HOST: "ec2-52-47-104-146.eu-west-3.compute.amazonaws.com",
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