module.exports = (sequelize, Sequelize) => {
    const Jeu = sequelize.define("Jeu", {
        idJeu: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nomJeu: {
            type: Sequelize.STRING,
            allowNull: true
        },
        nbJoueurMin: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        nbJoueurMax: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        age: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        duree: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        consigne: {
            type: Sequelize.STRING,
            allowNull: true
        },
        prototype: {
            type: Sequelize.BOOLEAN,
            allowNull: true
        }

    }, {
        tableName: 'Jeu',
        createdAt: false,
        updatedAt: false
    });

    return Jeu;
};