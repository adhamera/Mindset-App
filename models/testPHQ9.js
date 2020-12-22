module.exports = function (sequelize, DataTypes) {
    var testPHQ9 = sequelize.define("testPHQ9", {
        little: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 0
        },
        down: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 0
        },
        falling: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 0
        },
        energy: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 0
        },
        poor: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 0
        },
        bad: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 0
        },
        concentrating: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 0
        },
        moving: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 0
        },
        thoughts: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 0
        },
        dateofPHQ9: {
            type: DataTypes.DATE,
            allowNull: false
        },
        studentId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    return testPHQ9;
}