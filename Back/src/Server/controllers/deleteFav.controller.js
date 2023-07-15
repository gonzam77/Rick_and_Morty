const Favorites = require("../../Database/models/favorites.model");

const deleteFav = async (req, res) => {
  
    const { id } = req.params;
  
    try {
        const response = await Favorites.findByPk(id);
        response.destroy();
        return res.status(200).json({ status: 200, message: 'favorite deleted' });
    } catch (error) {
        return res.status(500).json({status: 500, message: error.message});
    }
};

module.exports = deleteFav;