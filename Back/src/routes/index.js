const { Router } = require("express");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
const postFav = require("../controllers/postFav");
const getFav = require("../controllers/getFav");
const deleteFav = require("../controllers/deleteFav")
const router = Router();


router.get("/onsearch/:id", getCharById);
router.get("/detail/:id", getCharDetail);
router.post("/fav", postFav);
router.get("/fav", getFav)
router.delete("/fav/:id", deleteFav)

module.exports = router;
