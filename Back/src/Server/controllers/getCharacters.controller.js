const Character = require('../../Database/models/character.model');

const getCharacters = async (req, res) => {
    try {
        const response = await Character.findAll();

        if(response.legth === 0) return res.status(404).json({ status: 404, message: 'Characters not found' })
        
        return res.status(200).json({ status: 200, message: 'Characters found', data: response });
    
    } catch (error) {
        return res.status(500).json({ status: 500, message: error.message })
    }
}

module.exports = getCharacters;