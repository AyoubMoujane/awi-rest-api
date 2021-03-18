module.exports = (sequelize, Sequelize) => {
    const ExposantSuivi = sequelize.define("SuiviExposant", {
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
            type: Sequelize.DATE,
            allowNull: false
        },
        secondContact: {
            type: Sequelize.DATE,
            allowNull: false
        },
        troisiemeContact: {
            type: Sequelize.DATE,
            allowNull: false
        },

    }, {
        tableName: 'SuiviExposant',
        createdAt: false,
        updatedAt: false
    });

    return ExposantSuivi;
};