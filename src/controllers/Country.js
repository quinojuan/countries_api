// Métodos GET y POST de Country

const { Country, Country_Activity, Activity } = require("../db");
const { Op } = require("sequelize");
const axios = require("axios");

// GET countries por query o todos los countries en la misma funcion
const getCountry = async (req, res, next) => {
  const { name } = req.query;
  try {
    if (name) {
      let countries = await Country.findAll({
        include: {
          model: Activity,
        },
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
      });
      res.json(countries);
    } else {
      let countries = await Country.findAll({
        include: {
          model: Activity,
        },
      });
      res.json(countries);
    }
  } catch (error) {
    next(error);
  }
};
// GET countries por ID
const getCountryByID = async (req, res, next) => {
  const { id } = req.params;
  try {
    const countryID = await Country.findByPk(id.toUpperCase(), {
      include: {
        model: Activity,
      },
    });
    res.json(countryID || "ID not found");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCountry,
  getCountryByID,
};
