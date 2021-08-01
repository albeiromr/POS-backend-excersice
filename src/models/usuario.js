const {DataTypes } = require('sequelize');
const db = require("../Database/database");

const usuario = db.define('usuario', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },
    nombreUsuario: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    nombreReal: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    Contrasena: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
}, {
    tableName: 'usuario',
    timestamps: false
});

module.exports = usuario;