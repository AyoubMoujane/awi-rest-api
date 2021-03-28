module.exports = (sequelize, Sequelize) => {
    const Espace = sequelize.define("Espace", {
        idEspace: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nbTableMax: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        prixUnitaireTable: {
            type: Sequelize.FLOAT,
            allowNull: true
        },
        prixM2: {
            type: Sequelize.FLOAT,
            allowNull: true
        },
    }, {
        tableName: 'Espace',
        createdAt: false,
        updatedAt: false
    });

    return Espace;
};