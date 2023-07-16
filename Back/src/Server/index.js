// Third Party Dependencies.
const express = require("express"),
    morgan = require("morgan"),
    cors = require("cors");

// Local Dependencies.
const routes = require("./routes/routes");

// Server Initialization.
const app = express();

// Cors.
app.use(
    cors({
        origin: "http://localhost:3000",
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
    })
);
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});

// Json.
app.use(express.json());

// Morgan.
app.use(morgan("dev"));

//Router
app.use("/rickandmorty", routes)

module.exports = app;