module.exports = (sequelize, Sequelize) => {
    const Contact = sequelize.define("Contact", {
        idContact: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nomContact: {
            type: Sequelize.STRING,
            allowNull: false
        },
        prenomContact: {
            type: Sequelize.STRING,
            allowNull: false
        },
        emailContact: {
            type: Sequelize.STRING,
            allowNull: false
        },
        rue: {
            type: Sequelize.STRING,
            allowNull: false
        },
        cp: {
            type: Sequelize.STRING,
            allowNull: false
        },
        ville: {
            type: Sequelize.STRING,
            allowNull: false
        },
        pays: {
            type: Sequelize.STRING,
            allowNull: false
        },
        telContact: {
            type: Sequelize.STRING,
            allowNull: false
        },
        telBureau: {
            type: Sequelize.STRING,
            allowNull: false
        },
        fonctionContact: {
            type: Sequelize.STRING,
            allowNull: false
        },
        estPrincipal: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
    }, {
        tableName: 'Contact',
        createdAt: false,
        updatedAt: false
    });

    return Contact;
};