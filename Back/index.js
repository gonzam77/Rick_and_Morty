const PORT = process.env.PORT || 3001;
const database = require("./src/Database/DB_connection")
const express = require('express');
const server = express()
const getCharFromApi = require('./src/Server/controllers/getCharFromApi.controller');



//Save in DB all characters
getCharFromApi();

database.sync({ force: false }).then(() =>
    console.log("Database connected"),
    server.listen(PORT, () => {
        console.log('server raised in port ' + PORT)
    })
)


