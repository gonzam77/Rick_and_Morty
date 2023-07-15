require("dotenv").config(); //npm i dotenv
const { Sequelize } = require("sequelize") //npm i sequelize
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;


const database = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
    logging: false,
})




//exportamos la base de datos y los modelos
module.exports = database;