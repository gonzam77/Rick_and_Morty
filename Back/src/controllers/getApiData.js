const axios = require("axios")

const getApiDta = async () => {
    try {
        let i = 1;
        const characters = [];

        while (1 < 6) {
            const response = await axios(`https://rickandmortyapi.com/api/character/${i}`);
            characters.push(response);
            i++;
        }
        characters = (await Promise.all(characters)).map(res => res.data.results.map(char => {
            return ({
                id: char.id,
                name: char.name,
                species: char.species,
                status: char.status,
                origin: char.origin.name,
                gender: char.gender,
                image: char.image,
            })
        }))
        return characters[0];
    } catch (error) {
        return {error: error.message};
    }
}

module.exports = getApiDta;