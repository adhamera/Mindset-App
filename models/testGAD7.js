module.exports = function(sequelize, DataTypes) {
    var testGAD7 = sequelize.define("testGAD7", {
        feeling: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 0
        },
        control: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 0
        },
        worrying: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 0
        },
        trouble: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 0
        },
        restless: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 0
        },
        annoyed: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 0
        },
        afraid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 0
        },
        dateofGAD7: {
            type: DataTypes.DATE,
            allowNull: false
        },
        studentId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    return testGAD7;
}