module.exports = (sequelize, Sequelize) => {
    const Reservation = sequelize.define("Reservation", {
        idReservation: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dateReservation: {
            type: Sequelize.DATE,
            allowNull: true
        },
        prix: {
            type: Sequelize.FLOAT,
            allowNull: true
        },
        remise: {
            type: Sequelize.FLOAT,
            allowNull: true
        },
        factureEnvoye: {
            type: Sequelize.BOOLEAN,
            allowNull: true
        },
        dateModification: {
            type: Sequelize.DATE,
            allowNull: false
        },
 
    }, {
        tableName: 'Reservation',
        createdAt: false,
        updatedAt: false
    });

    return Reservation;
};