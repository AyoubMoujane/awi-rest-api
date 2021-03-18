module.exports = (sequelize, Sequelize) => {
    const ReservationEspace = sequelize.define("ReservationEspace", {
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