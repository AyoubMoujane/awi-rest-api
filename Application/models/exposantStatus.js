module.exports = (sequelize, Sequelize) => {
    const ExposantStatus = sequelize.define("StatusExposant", {
        idStatusExposant: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nomStatus: {
            type: Sequelize.STRING,
            allowNull: true
        },
    }, {
        tableName: 'StatusExposant',
        createdAt: false,
        updatedAt: false
    });

    return ExposantStatus;
};