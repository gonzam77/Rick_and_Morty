const { Router } = require("express");
const getCharByName = require("../controllers/getCharByName.controller");
const getCharDetail = require("../controllers/getCharDetail.controller");
const getCharacters = require('../controllers/getCharacters.controller');
const updatetFav = require("../controllers/updatetFav.controller");
const getFav = require("../controllers/getFav.controller");

const routes = Router();

routes.get("/onsearch", getCharByName);
routes.get("/characters", getCharacters);
routes.get("/detail/:id", getCharDetail);
routes.get("/fav", getFav);
routes.put("/fav/:id", updatetFav);

module.exports = routes;
