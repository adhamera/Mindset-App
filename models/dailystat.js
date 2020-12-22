module.exports = function(sequelize, DataTypes) {
    var dailystat = sequelize.define("dailystat", {
        dateofSurvey: {
            type: DataTypes.DATE,
            allowNull: false
        },
        //Moods scale for references
        //1 = hopeless
        //2 = sad
        //3 = neutral
        //4 = happy
        //5 = fantastic
        mood: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        studentId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    return dailystat;
}