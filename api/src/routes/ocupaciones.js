const { default: axios } = require('axios');
const express = require('express');

const router = express.Router();
module.exports = router;

router.get('/', async (req, res) => {
    const url = await axios.get('https://breakingbadapi.com/api/characters');
    const mapped = url?.data.map(c => c.occupation);
    const occupation = mapped?.map(o => {
        for(let i = 0; i < o.length; i++) return o[i]
        });
        console.log(occupation);
    occupation.forEach(o => {
        Occupation.findOrCreate({
            where: {name: o}
        });
    });
    const allOcupations = await Occupation.findAll();
    res.status(200).send(allOcupations);
})