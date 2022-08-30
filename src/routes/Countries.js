const { Router } = require("express");
const { getCountry, getCountryByID } = require("../controllers/Country"); // me traigo las funciones controladoras para cada ruta
const Countries = Router();

Countries.get("/", getCountry); // Dependiendo si me pasan un "name" llamo a todos los países o devuelvo todos los países
Countries.get("/:id", getCountryByID); // Hago un llamado a un país por su ID

module.exports = Countries;