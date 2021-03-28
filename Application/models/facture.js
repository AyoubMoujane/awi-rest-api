module.exports = (sequelize, Sequelize) => {
    const Facture = sequelize.define("Facture", {
        idFacture: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dateEmissionFacture: {
            type: Sequelize.DATE,
            allowNull: true
        },
        datePaiementFacture: {
            type: Sequelize.DATE,
            allowNull: true
        },

    }, {
        tableName: 'Facture',
        createdAt: false,
        updatedAt: false
    });

    return Facture;
};