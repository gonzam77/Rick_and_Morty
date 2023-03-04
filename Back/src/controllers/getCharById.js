const axios = require("axios");
const URL = 'http://rickandmortyapi.com/api/character';

const getCharById = async function (req, res) {
    const { id } = Number(req.params)
    try {
        const response = await axios(URL + id)
        const data = response.data;
        character = {
            name: data.name,
            id: data.id,
            species: data.species,
            iamge: data.iamge,
            gender: data.gender,
        }
        return res.status(200).json(character)

    } catch (error) {
        return res.status(500).json(error.message)
    }

}
module.exports = getCharById;










// const getCharById = function (res, id) {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//         .then(response => response.data)
//         .then(data => {
//             const { id, image, name, gender, species } = data
//             const character = {
//                 id: id,
//                 image: image,
//                 name: name,
//                 gender: gender,
//                 species: species
//             }
//             res.writeHead(200, { "Content-type": "applicaton/json" }).end(JSON.stringify(character))
//         })
//         .catch(err =>
//             res
//                 .writeHead(500, { "Content-type": "text/plain" })
//                 .end(err.message)
//         )
// }

module.exports = getCharById;
