const { Router, application } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios');
const characters = require('./characters');
const occupations = require('./ocupaciones');




const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/characters', characters);
router.use('/ocupaciones', occupations);

module.exports = router;
