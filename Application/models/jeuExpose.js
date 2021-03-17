module.exports = (sequelize, Sequelize) => {
    const JeuExpose = sequelize.define("JeuExpose", {
        idReservation: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        idJeu: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        quantiteExpose: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        quantiteDonation: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        quantiteTombola: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        estAmene: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        estRecu: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        estARenvoye: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        aEteRenvoye: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        estPlace: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },

    }, {
        tableName: 'JeuExpose',
        createdAt: false,
        updatedAt: false
    });

    return JeuExpose;
};