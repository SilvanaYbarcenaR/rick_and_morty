/* const axios = require('axios');

const getCharById = (res, id) => {
    axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
    .then(
        ({name, gender, species, origin, image, status}) => {
            const character = {
                id,
                name,
                gender,
                species,
                origin,
                image,
                status
            }
            return res
            .writeHead(200, {"Content-type": "application/json"})
            .end(JSON.stringify(character))
        }
    )
    .catch(error => {
        return res
        .writeHead(500, {"Content-type": "text/plain"})
        .end(error.message)
    })
}


module.exports = getCharById;
 */

const axios = require('axios');

const URL = 'https://rickandmortyapi.com/api/character/';

/* const getCharById = (req, res) => {

    const { id } = req.params;

    axios
    .get(`${URL}/${id}`)
    .then(response => response.data)
    .then(
        ({status, name, species, origin, image, gender}) => {
            if(name) {
                const character = {
                    id,
                    status,
                    name,
                    species,
                    origin,
                    image,
                    gender
                }
                return res.status(200).json(character)
            }
            return res.status(404).send('Not found 123');
        }
    )
    .catch(error => res.status(500).send(error.message))
} */

const getCharById = async (req, res) => {
    try {
        const { id } = req.params;
        const { data } = await axios.get(`${URL}/${id}`);
        const {status, name, species, origin, image, gender} = await data;
        const character = {
            id,
            status,
            name,
            species,
            origin,
            image,
            gender
        }
        return res.status(200).json(character);
    }
    catch(error) {
        res.status(error.response.status).send(error.response.data.error)
    }
}

module.exports = {
    getCharById
};