module.exports = (sequelize, Sequelize) => {
    const ReservationEspace = sequelize.define("ReservationEspace", {
        idEspace: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        idReservation: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        nbTable: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        nbM2: {
            type: Sequelize.FLOAT,
            allowNull: false
        },

    }, {
        tableName: 'ReservationEspace',
        createdAt: false,
        updatedAt: false
    });

    return ReservationEspace;
};