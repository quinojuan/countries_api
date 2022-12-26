const { Router } = require('express');
const bodyParser = require('body-parser');
const Countries = require('./Countries.js');
const Activity = require('./TourActivity.js');
const NameCountries = require('./NameCountries.js');
const Welcome = require("../controllers/Welcome")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use(bodyParser.json());

//Rutas de mi API
router.use('/countries', Countries); // query, id o todos...
router.use('/TourActivity', Activity); //
router.use('/AllCountries', NameCountries); // esta ruta la utilizo para cargar un arreglo con todos los nombres de los países únicamente 
router.use("/", Welcome)

module.exports = router;