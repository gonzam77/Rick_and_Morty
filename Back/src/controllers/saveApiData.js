const getApiDta = require("./getApiData");
const { characterModel } = require("../DB_connection")
// const { characterModel } = require("../models/characterModel");




const saveApiData = async () => {
    try {
        const characters = await getApiDta();
        const createCharacters = await characterModel.bulkCreate(characters)
        //blukCreate nos permite pasarle un array de objetos y los crea todos juntos en la DB
        
    } catch (error) {
        return {error: error.message}
    }
}

module.exports = saveApiData;