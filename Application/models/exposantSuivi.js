module.exports = (sequelize, Sequelize) => {
    const ExposantSuivi = sequelize.define("SuiviExposant", {
        commentaires: {
            type: Sequelize.STRING,
            allowNull: true
        },
        jeuxRentres: {
            type: Sequelize.BOOLEAN,
            allowNull: true
        },
        besoinBenevol: {
            type: Sequelize.BOOLEAN,
            allowNull: true
        },
        premierContact: {
            type: Sequelize.DATE,
            allowNull: true
        },
        secondContact: {
            type: Sequelize.DATE,
            allowNull: true
        },
        troisiemeContact: {
            type: Sequelize.DATE,
            allowNull: true
        },
        place:{
            type: Sequelize.BOOLEAN,
            allowNull: true
        }

    }, {
        tableName: 'SuiviExposant',
        createdAt: false,
        updatedAt: false
    });

    return ExposantSuivi;
};