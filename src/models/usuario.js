const { Sequelize, DataTypes } = require('sequelize');
const db = require("../Database/database");

const usuario = db.define('usuario', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nombreUsuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nombreReal: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Contrasena: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: 'usuario'
});

module.exports = usuario;