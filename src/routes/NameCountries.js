const { Router } = require("express");
const { Country } = require("../db");
const express = require("express");
const router = Router();

router.use(express.json());
//Llamado a la API por sólo los nombres para la lista de búsqueda de activity
router.get("/", async (req, res, next) => {
  try {
    const allCountries = await Country.findAll({  // Busco todos los países con un criterio de ordenación y brindándole la columna a ordenar
      attributes: ["name"],
      order: [["name", "ASC"]], // para experiencia de usuario los ordeno
    });

    res.status(200).send(allCountries);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
