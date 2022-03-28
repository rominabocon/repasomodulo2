const express = require('express');
const axios = require('axios');
const { query } = require('express');

const router = express.Router();
module.exports = router;

const infoApi = async () => {
    const url = await axios.get('https://breakingbadapi.com/api/characters');
    const info =  await url.data.map(c => {
        return {
            id: c.char_id,
            name: c.name,
            img: c.img,
            occupation: c.occupation ? c.occupation.map(o => o) : c.occupation.map(o => o),
            nickname: c.nickname,
            status: c.status,
            birthday: c.birthday,
            apparence: c.apparence?.map(a => a)
        };
    });
    return info;
}

const allCharacters = async () => {
    const apiInfo = await infoApi();
    const info = [...apiInfo];
    return info;
}

router.get('/', async (req, res) => {
    const { name } = req.query;
    const characters = await allCharacters();
    if(name) {
        let characterName = characters.filter(c => c.name.toLowerCase().includes(name.toLowerCase()));
        characterName.length ? res.status(200).send(characterName)
        : res.status(404).send('El personaje requerido no existe')
    } else {
        res.status(200).send(characters);
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const characters = await allCharacters();
    if(id) {
        let characterid = characters?.filter(c => c.id == id);
        characterid.length
        ? res.status(200).json(characterid)
        : res.status(404).send("character id not found");
    }
})