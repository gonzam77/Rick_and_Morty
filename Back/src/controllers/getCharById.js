const axios = require("axios");
const URL = 'http://rickandmortyapi.com/api/character/';

const getCharById = async function (req,res) {
    try {
        const { id } = req.params
        const response = await axios(URL + id)
        const data = response.data;
        character = {
            name: data.name,
            id: data.id,
            species: data.species,
            image: data.image,
            gender: data.gender,
        }
        res.status(200).json(character)

    } catch (error) {
        res.status(500).json({error: error.message})
    }

}
module.exports = getCharById;
