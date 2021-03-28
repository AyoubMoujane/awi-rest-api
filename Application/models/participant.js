module.exports = (sequelize, Sequelize) => {
    const Participant = sequelize.define("Participant", {
        idParticipant: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nomParticipant: {
            type: Sequelize.STRING,
            allowNull: true
        },
        editeurSeulement: {
            type: Sequelize.BOOLEAN,
            allowNull: true
        },
    }, {
        tableName: 'Participant',
        createdAt: false,
        updatedAt: false
    });

    return Participant;
};