const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Employee = db.define('employee', {
    firstName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    gender: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    birthday: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    salary: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {timestamps: false, createdAt: false, updatedAt: false,});

module.exports = Employee;