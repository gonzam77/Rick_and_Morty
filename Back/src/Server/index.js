// Third Party Dependencies.
const express = require("express"),
    morgan = require("morgan"),
    cors = require("cors");

// Local Dependencies.
const routes = require("./routes/routes");

// Server Initialization.
const app = express();

// Json.
app.use(express.json());

// Morgan.
app.use(morgan("dev"));

//Router
app.use("/rickandmorty", routes)

// Cors.
app.use(
    cors({
        origin: "http://localhost:3000",
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
    })
);

module.exports = app;