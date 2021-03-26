module.exports = (sequelize, Sequelize) => {
    const Reservation = sequelize.define("Reservation", {
        idReservation: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dateReservation: {
            type: Sequelize.DATE,
            allowNull: false
        },
        prix: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        remise: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        factureEnvoye: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        // facture: {
        //     type: Sequelize.INTEGER,
        //     allowNull: false
        // },
        
    }, {
        tableName: 'Reservation',
        createdAt: false,
        updatedAt: false
    });

    return Reservation;
};