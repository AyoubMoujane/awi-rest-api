module.exports = (sequelize, Sequelize) => {
    const JeuExpose = sequelize.define("JeuExpose", {
        idReservation: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        idJeu: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        quantiteExpose: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        quantiteDonation: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        quantiteTombola: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        estAmene: {
            type: Sequelize.BOOLEAN,
            allowNull: true
        },
        estRecu: {
            type: Sequelize.BOOLEAN,
            allowNull: true
        },
        estARenvoye: {
            type: Sequelize.BOOLEAN,
            allowNull: true
        },
        aEteRenvoye: {
            type: Sequelize.BOOLEAN,
            allowNull: true
        },
        estPlace: {
            type: Sequelize.BOOLEAN,
            allowNull: true
        },
        zone: {
            type: Sequelize.INTEGER,
            allowNull: false
        }

    }, {
        tableName: 'JeuExpose',
        createdAt: false,
        updatedAt: false
    });

    return JeuExpose;
};