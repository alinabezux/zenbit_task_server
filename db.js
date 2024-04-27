const {Sequelize} = require('sequelize')
const pg = require("pg");
require('dotenv').config();

module.exports = new Sequelize(process.env.POSTGRES_URL, {dialectModule: pg})

