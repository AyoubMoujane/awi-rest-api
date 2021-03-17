module.exports = (sequelize, Sequelize) => {
    const Festival = sequelize.define("Festival", {
        idFestival: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nomFestival: {
            type: Sequelize.STRING,
            allowNull: false
        },
        dateFestival: {
            type: Sequelize.DATETIME,
            allowNull: false
        },
        estCourant: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },

    }, {
        tableName: 'Festival',
        createdAt: false,
        updatedAt: false
    });

    return Festival;
};