const axios = require("axios");
const URL = 'http://rickandmortyapi.com/api/character/';


const getCharDetail = async function (req, res) {

    try {
        const {id} = req.params
        const response = await axios(URL + id)
        const data = response.data
        characterDetail = {
            name: data.name,
            id: data.id,
            gender: data.gender,
            image: data.image,
            species: data.species,
            origin: data.origin?.name
        }
        console.log(characterDetail);
        return res.status(200).json(characterDetail)
    } catch (error) {
        return res.status(500).json(error.message)
    };

};

module.exports = getCharDetail;











// const getCharDetail = function (res, id) {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//         .then(response => response.data)
//         .then(data => {
//             const { status, image, name, origin, species} = data;
//             const character = {
//                 status: status,
//                 image: image,
//                 name: name,
//                 origin: origin?.name,
//                 species: species
//             }
//             res.writeHead(200, { "Content-type": "applicaton/json" }).end(JSON.stringify(character))

//         })
//         .catch((err) => {
//             res.writeHead(500, { "Content-type": "text/plain" }).end(err.message)
//         })
// }

// module.exports = getCharDetail;