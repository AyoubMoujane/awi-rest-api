module.exports = (sequelize, Sequelize) => {
    const Contact = sequelize.define("Contact", {
        idContact: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nomContact: {
            type: Sequelize.STRING,
            allowNull: true
        },
        prenomContact: {
            type: Sequelize.STRING,
            allowNull: true
        },
        emailContact: {
            type: Sequelize.STRING,
            allowNull: true
        },
        rue: {
            type: Sequelize.STRING,
            allowNull: true
        },
        cp: {
            type: Sequelize.STRING,
            allowNull: true
        },
        ville: {
            type: Sequelize.STRING,
            allowNull: true
        },
        pays: {
            type: Sequelize.STRING,
            allowNull: true
        },
        telContact: {
            type: Sequelize.STRING,
            allowNull: true
        },
        telBureau: {
            type: Sequelize.STRING,
            allowNull: true
        },
        fonctionContact: {
            type: Sequelize.STRING,
            allowNull: true
        },
        estPrincipal: {
            type: Sequelize.BOOLEAN,
            allowNull: true
        },
    }, {
        tableName: 'Contact',
        createdAt: false,
        updatedAt: false
    });

    return Contact;
};