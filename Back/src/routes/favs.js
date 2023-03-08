const { Router } = require("express")
const favsRouter = Router()
const favorites = require("../utils/favs")

favsRouter.post("/create", (req, res) => {
    favorites.push({...req.body})
    res.status(200).json({msg: "Agregado ok", data: favorites})
})

favsRouter.get("/get",(req, res) => {
    const resulst = getFav()
} )

favsRouter.delete("/delete/:id",(req, res) => {
    const resulst = deleteFav()
} )



module.exports = favsRouter;