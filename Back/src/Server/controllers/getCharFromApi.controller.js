const Character  = require('../../Database/models/character.model');
const axios = require('axios');

const getCharFromApi = async (req, res) => {

    try {
        for(let i = 1; i < 100; i++) {
            const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${i}`);
                Character.create ({
                    name: data.name,
                    species: data.species,
                    gender: data.gender,
                    image: data.image,
                    status: data.status,
                    origin: data.origin.name             
                })
        }
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = getCharFromApi;
