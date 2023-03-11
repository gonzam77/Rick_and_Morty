const cors = require("cors")
const express = require("express")
const server = express()
const PORT = 3001;
const router = require("./routes/index")
const morgan = require("morgan")
const { database } = require("./DB_connection")
const { saveApiData } = require("./controllers/saveApiData");

server.use(express.json())
server.use(cors())
server.use(morgan("dev"))
server.use("/rickandmorty", router)

database.sync({ force: true }).then(() =>
    console.log("Database connected"),
    server.listen(PORT, () => {
        console.log('server raised in port ' + PORT)
    })
)


