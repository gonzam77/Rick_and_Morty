const Character = require('../../Database/models/character.model');

const getFav = async (req, res) => {
    try {
        const response = await Character.findAll({
            where: {
                is_fav: true
            }
        });
        if (response.length === 0) return res.status(404).json({ status: 404, message: 'Favorites not found' });
        return res.status(200).json({ status: 200, message: 'Favorites found', data: response });
    } catch (error) {
        return res.status(500).json({ status: 500, message: error.message })
    }
}

module.exports = getFav