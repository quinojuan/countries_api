// Importar todos los routers;

const { Router } = require("express");
// const { Country, Activity } = require('../db');
const router = Router();
const { getActivity, postActivity } = require("../controllers/Activity");

router.get("/", getActivity); //GET de todas las actividades
router.post("/", postActivity); // POST de actividades

module.exports = router;
