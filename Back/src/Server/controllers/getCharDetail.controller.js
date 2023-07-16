const  Character  = require('../../Database/models/character.model');
const URL = 'http://rickandmortyapi.com/api/character/';


const getCharDetail = async function (req, res) {

    const { id } = req.params

    try {
        if(!id || id === '' || id.length === 0) return res.status(409).json({ status: 409, message: 'Param id is require'});
        
        const response = await Character.findOne({
            where: {
                id: id
            }
        });
        return res.status(200).json({ status: 200, message: 'Character found', data: response });
    } catch (error) {
        res.status(500).json({ status: 500, message: error.message });
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