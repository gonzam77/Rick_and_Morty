const PORT = process.env.PORT || 3001;
const database = require("./src/Database/DB_connection");
const getCharFromApi = require('./src/Server/controllers/getCharFromApi.controller');
const app = require('./src/Server/index');


//Save in DB all characters
getCharFromApi();

database.sync({ force: false }).then(() =>
    console.log("Database connected"),
    app.listen(PORT, () => {
        console.log('server raised in port ' + PORT)
    })
)


