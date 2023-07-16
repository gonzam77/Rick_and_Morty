const Character = require('../../Database/models/character.model.js');

const updateFav = async (req, res) => {
    
    const { id } = req.params
    
    try {
        if (!id || id === '' || id.length === 0) return res.status(409).json({ status: 409, message: 'Id param is require' });
        
        const response = await Character.findByPk(id);
        if(response.isFav === false) {
            response.isFav = true;
        } else {
            response.isFav = false;
        }

        return res.status(200).json({ status: 200, message: 'isFav property was changed', data: response });

    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

module.exports = updateFav;