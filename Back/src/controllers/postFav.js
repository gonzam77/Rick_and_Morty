const { favorites } = require("../utils/favs")

const postFav = (req, res) => {
    try {
        favorites.push({ ...req.body })
        return res.status(201).json(favorites)

    } catch (error) {
        return req.status(400).json({ error: error.message })
    }
}

module.exports = postFav;