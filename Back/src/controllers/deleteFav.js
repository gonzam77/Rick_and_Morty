let favorites = require("../utils/favs");

const deleteFav = (req, res) => {
    try {
        const { id } = req.params;
        favorites = favorites.filter(char => char.id !== Number(id));
        return res.status(200).json(favorites)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

module.exports = deleteFav