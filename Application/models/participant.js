module.exports = (sequelize, Sequelize) => {
    const Participant = sequelize.define("Participant", {
        idParticipant: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nomParticipant: {
            type: Sequelize.STRING,
            allowNull: false
        },
        prenomParticipant: {
            type: Sequelize.STRING,
            allowNull: false
        },
        editeurSeulement: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
    }, {
        tableName: 'Participant',
        createdAt: false,
        updatedAt: false
    });

    return Participant;
};