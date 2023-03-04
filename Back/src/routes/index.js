const {Router} = require("express");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
const getFav = require("../controllers/getFav");
const deleteFav = require("../controllers/deleteFav");
const postFav = require("../controllers/postFav");
const router = Router();


router.get("/onsearch/:id", getCharById);
router.get("/detail/:id", getCharDetail);
router.post("/rickandmorty/fav", postFav)
router.get("/rickandmorty/fav", getFav)
router.delete("/rickandmorty/fav/:id", deleteFav)

module.exports = router;