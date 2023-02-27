import axios from 'axios';

const getCharById = function (res, id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res =>{
        const obj = {
            id: res.data.id,
            image: res.data.image,
            name:res.data.name,
            gender:res.data.gender,
            species:res.data.species
        }
        res.writeHead(200, {"Content-type":"applicaton/json"}).end(JSON.stringify(obj))

    })
    .catch((err) => {
        res.writeHead(500, {"Content-type":"text/plain"}).end(err.message)
    })
}