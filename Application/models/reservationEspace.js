module.exports = (sequelize, Sequelize) => {
    const ReservationEspace = sequelize.define("ReservationEspace", {
        nbTable: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        nbM2: {
            type: Sequelize.INTEGER,
            allowNull: true
        },

    }, {
        tableName: 'ReservationEspace',
        createdAt: false,
        updatedAt: false
    });

    return ReservationEspace;
};