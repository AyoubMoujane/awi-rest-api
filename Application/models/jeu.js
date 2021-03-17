module.exports = (sequelize, Sequelize) => {
    const Jeu = sequelize.define("Jeu", {
        idJeu: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nomJeu: {
            type: Sequelize.STRING,
            allowNull: false
        },
        nbJoueurMin: {
            type: Sequelize.INT,
            allowNull: false
        },
        nbJoueurMax: {
            type: Sequelize.INT,
            allowNull: false
        },
        age: {
            type: Sequelize.INT,
            allowNull: false
        },
        duree: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        consigne: {
            type: Sequelize.STRING,
            allowNull: false
        },
        prototype: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        estCourant: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },

    }, {
        tableName: 'Jeu',
        createdAt: false,
        updatedAt: false
    });

    return Jeu;
};