module.exports = (sequelize, Sequelize) => {
    const Zone = sequelize.define("Zone", {
        idZone: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nomZone: {
            type: Sequelize.STRING,
            allowNull: false
        },
    }, {
        tableName: 'Zone',
        createdAt: false,
        updatedAt: false
    });

    return Zone;
};