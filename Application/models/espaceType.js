module.exports = (sequelize, Sequelize) => {
    const EspaceType = sequelize.define("TypeEspace", {
        idTypeEspace: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nomEspace: {
            type: Sequelize.STRING,
            allowNull: false
        },
    }, {
        tableName: 'EspaceType',
        createdAt: false,
        updatedAt: false
    });

    return EspaceType;
};