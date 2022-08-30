const { Router } = require('express');
const bodyParser = require('body-parser');
const Countries = require('./Countries.js');
const Activity = require('./TourActivity.js');
const NameCountries = require('./NameCountries.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use(bodyParser.json());

//Rutas de mi API
router.use('/countries', Countries);
router.use('/TourActivity', Activity);
router.use('/AllCountries', NameCountries);

module.exports = router;