const http = require('http');
// import "./utils/data"
const characters = require("../utils/data")

const PORT = 3001;



http.createServer((req, res) => {

    // res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.url.includes("rickandmorty/character")) {
        console.log(req.url)

        // let id = req.url.split('/').at(-1)
        // // let characterFilter = characters.filter(element => element.id === Number(id))
        // let characterFilter = characters.find(element => element.id === Number(id))
        // res.writeHead(200, {"Content-type":"application/json"}).end(JSON.stringify(characterFilter))
    }


}).listen(PORT, "localhost");

