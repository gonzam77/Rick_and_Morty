const { Router } = require("express");
const getCharByName = require("../controllers/getCharByName.controller");
const getCharDetail = require("../controllers/getCharDetail.controller");
const postFav = require("../controllers/postFav.controller");
const getFav = require("../../controllers/getFav");
const deleteFav = require("../../controllers/deleteFav")
const routes = Router();


routes.get("/onsearch", getCharByName);
routes.get("/detail/:id", getCharDetail);
routes.post("/fav/:id", postFav);
routes.get("/fav", getFav)
routes.delete("/fav/:id", deleteFav)

module.exports = routes;
