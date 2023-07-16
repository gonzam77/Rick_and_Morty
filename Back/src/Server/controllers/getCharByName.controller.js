const  Character  = require('../../Database/models/character.model')
const URL = 'http://rickandmortyapi.com/api/character/';
const { Op } = require('sequelize');

const getCharByName = async function (req, res) {

    const { name } = req.query;

    try {
        if (!name || name === '' || name.length === 0) return res.status(409).json({ status: 409, message: 'Param id is require' });
        const response = await Character.findAll({
            where: {
                name: {
                    [Op.iLike]: `${name}%`,
                },
            }
        });
        if(!response || response.length === 0) return res.status(404).json({ status: 404, message: 'Character not found' });
        return res.status(200).json({ status: 200, message: 'Character found', data: response });

    } catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }

};

module.exports = getCharByName;
