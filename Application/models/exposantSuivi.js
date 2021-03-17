module.exports = (sequelize, Sequelize) => {
    const ExposantSuivi = sequelize.define("SuiviExposant", {
        idFestival: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        idParticipant: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        reponse: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        commentaires: {
            type: Sequelize.STRING,
            allowNull: false
        },
        jeuxRentres: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        besoinBenevol: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        premierContact: {
            type: Sequelize.DATETIME,
            allowNull: false
        },
        secondContact: {
            type: Sequelize.DATETIME,
            allowNull: false
        },
        troisiemeContact: {
            type: Sequelize.DATETIME,
            allowNull: false
        },

    }, {
        tableName: 'SuiviExposant',
        createdAt: false,
        updatedAt: false
    });

    return ExposantSuivi;
};