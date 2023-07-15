const Favorites = require("../../Database/models/favorites.model");

const getFav = async (req, res) => {
    try {
        const response = await Favorites.findAll();
        return res.status(200).json({ status: 200, message: 'Favorites found', data: response });
    } catch (error) {
        return res.status(500).json({ status: 500, message: error.message })
    }
}

module.exports = getFav