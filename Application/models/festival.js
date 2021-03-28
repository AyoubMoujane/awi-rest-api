module.exports = (sequelize, Sequelize) => {
    const Festival = sequelize.define("Festival", {
        idFestival: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nomFestival: {
            type: Sequelize.STRING,
            allowNull: true
        },
        dateFestival: {
            type: Sequelize.DATE,
            allowNull: true
        },
        estCourant: {
            type: Sequelize.BOOLEAN,
            allowNull: true
        },

    }, {
        tableName: 'Festival',
        createdAt: false,
        updatedAt: false
    });

    return Festival;
};