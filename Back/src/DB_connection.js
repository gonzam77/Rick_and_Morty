require("dotenv").config(); //npm i dotenv
const { Sequelize, DataTypes } = require("sequelize") //npm i sequelize
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const CharacterModel = require("./models/characterModel");


const database = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
    logging: false,
})

//crea el modelo pasandole la DB
CharacterModel(database);

//podemos ver los models en la base de datos (entidades)
//console.log(database.models);


//exportamos la base de datos y los modelos
module.exports = { database, ...database.models };