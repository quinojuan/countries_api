// defino los métodos GET y POST de Activity

const { Country, Activity } = require("../db"); // importo los modelos de DB
const { Router } = require("express");
const router = Router();

// GET - Esta ruta es para obtener todas las actividades generadas hasta el momento

const getActivity = async (req, res, next) => {
  try {
    const tourActivity = await Activity.findAll();
    if (tourActivity.length === 0) {
      res.json("No hay actividades");
    } else {
      res.status(200).json(tourActivity); // En caso de haber actividades las retorna a todas
    }
  } catch (error) {
    next(error);
  }
};

// POST - Esta ruta es para generar las actividades y asociarlas con un país

const postActivity = async (req, res, next) => {
  const { name, difficulty, duration, season, country } = req.body; // cuando creo la actividad le paso el país a la que pertenece (por eso country)
  try {
    const activity = await Activity.create({
      // en este create paso todas las propiedades menos la de country que no va a ir incluida en la tabla
      name,
      difficulty,
      duration,
      season,
    });
    let countries = await Country.findAll({
      // Busco el nombre del país que coincida con el nombre que me pasaron por BODY
      where: {
        name: country, // buscar la manera de que me coincidan mayusculas y minúsculas porque si no escribo bien el país no funciona // ver si realmente es un problema desde el FRONT
      },
    });

    await activity.addCountry(countries); // agrego el país a la actividad
    return res.json({ message: "Activity succesfully added" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  router,
  getActivity,
  postActivity
}