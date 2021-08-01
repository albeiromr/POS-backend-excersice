const {DataTypes} = require('sequelize');
const db = require("../Database/database");

const producto = db.define('producto', {
    codigo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    unidad: {
        type: DataTypes.STRING(15),
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