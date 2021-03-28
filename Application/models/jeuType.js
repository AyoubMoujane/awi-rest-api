module.exports = (sequelize, Sequelize) => {
    const JeuType = sequelize.define("TypeJeu", {
        idTypeJeu: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nomType: {
            type: Sequelize.STRING,
            allowNull: true
        },
    }, {
        tableName: 'TypeJeu',
        createdAt: false,
        updatedAt: false
    });

    return JeuType;
};