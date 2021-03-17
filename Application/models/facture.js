module.exports = (sequelize, Sequelize) => {
    const Facture = sequelize.define("Facture", {
        idFacture: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dateEmissionFacture: {
            type: Sequelize.DATETIME,
            allowNull: false
        },
        datePaiementFacture: {
            type: Sequelize.DATETIME,
            allowNull: false
        },

    }, {
        tableName: 'Facture',
        createdAt: false,
        updatedAt: false
    });

    return Facture;
};