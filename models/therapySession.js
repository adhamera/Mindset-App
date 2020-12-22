module.exports = function(sequelize, DataTypes) {
    var therapySession = sequelize.define("therapySession", {
        subject: {
            type: DataTypes.STRING,
            allowNull: false
        },
        studentId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        counselorId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        dateofSession: {
            type: DataTypes.DATE,
            allowNull: false
        },
        /* This field is intented to record the resolution of this session */
        note: {
            type: DataTypes.STRING,
            allowNull: true
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        meetinglink: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    return therapySession;
}