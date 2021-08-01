const { Sequelize, DataTypes } = require('sequelize');
const db = require("../Database/database");

const producto = db.define('producto', {
    codigo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    unidad: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
}, {
    tableName: 'producto',
    timestamps: false
});

module.exports = producto;