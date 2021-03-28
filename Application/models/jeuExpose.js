module.exports = (sequelize, Sequelize) => {
    const JeuExpose = sequelize.define("JeuExpose", {
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

    }, {
        tableName: 'JeuExpose',
        createdAt: false,
        updatedAt: false
    });

    return JeuExpose;
};