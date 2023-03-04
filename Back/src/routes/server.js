// const http = require('http');
// const getCharById = require("../controllers/getCharById")
// const getCharDetail = require("../controllers/getCharDetail")
const express = require("express")
const server = express()
const PORT = 3001;
const router = require("./index")
const morgan = require("morgan")

server.use(express.json())
server.use("/", router)
server.use(morgan("dev"))

server.listen(PORT, ()=>{
    console.log('server raised in port ' + PORT)
})



// http.createServer((req, res) => {

//     res.setHeader('Access-Control-Allow-Origin', '*');
//     let id = req.url.split("/").at(-1);

//     if (req.url.includes("onsearch")) {
//         getCharById(res, id);
//     }
//     if (req.url.includes("detail")) {
//         getCharDetail(res, id);
//     }

// }).listen(3001, "localhost");


