module.exports = (sequelize, Sequelize) => {
    const Facture = sequelize.define("Facture", {
        idFacture: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dateEmissionFacture: {
            type: Sequelize.DATE,
            allowNull: false
        },
        datePaiementFacture: {
            type: Sequelize.DATE,
            allowNull: false
        },

    }, {
        tableName: 'Facture',
        createdAt: false,
        updatedAt: false
    });

    return Facture;
};