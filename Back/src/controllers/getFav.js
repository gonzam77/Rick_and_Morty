let favorites = require("../utils/favs")

const getFav = (req, res) => {
    try {
        return res.status(200).json(favorites);
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}


module.exports = getFav