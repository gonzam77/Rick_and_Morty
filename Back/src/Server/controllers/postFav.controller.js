const Favorites = require("../../Database/models/favorites.model.js");

const postFav = async (req, res) => {
    
    const { id } = req.params
    
    try {
        if (!id || id === '' || id.length === 0) return res.status(409).json({ status: 409, message: 'Id param is require' });
        
        Favorites.create({
            character_id: id
        });

        return res.status(200).json({ status: 200, message: 'Added to favorites' });

    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

module.exports = postFav;