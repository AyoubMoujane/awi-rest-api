module.exports = (sequelize, Sequelize) => {
    const Espace = sequelize.define("Espace", {
        idEspace: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nbTableMax: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        prixUnitaireTable: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        prixM2: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
    }, {
        tableName: 'Espace',
        createdAt: false,
        updatedAt: false
    });

    return Espace;
};