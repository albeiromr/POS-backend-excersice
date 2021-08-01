const { Sequelize } = require('sequelize');
const dotenv = require("dotenv");
dotenv.config({path: `${__dirname}/../../.env`});

const baseDeDatos = process.env.DATABASE_DATABASE;
const usuario = process.env.DATABASE_USER;
const password = process.env.DATABASE_PASSWORD;
const host = process.env.DATABASE_HOST;

const db = new Sequelize(baseDeDatos, usuario, password, {
    host: host,
    dialect: 'mysql'
});

module.exports = db;