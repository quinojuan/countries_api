/////////////////////////// CARGAR LOS PAÍSES EN LA BASE DE DATOS ///////////////////////////

const axios = require("axios");
const { Country } = require("../db");

const loadDB = async () => {
  try {
    const validate = await Country.findOne({  // este validate lo utilizo porque me pareció que optimizaba el codigo frente a un findOrCreate
      where: {
        name: "Argentina",
      },
    });

    const urlApi = await axios.get("http://restcountries.com/v3/all");
    const apiInfo = urlApi.data;

    const countries = apiInfo.map((country) => {
      return {
        id: country.cca3,
        name: country.name.common,
        flag: country.flags[1],
        region: country.region,
        capital: country.capital
          ? country.capital[0]
          : "No entregada por la API",
        subregion: country.subregion
          ? country.subregion
          : "No entregada por la API",
        area: country.area,
        population: country.population
        // languages: country.languages
      };
    });

    if (!validate) {
      await Country.bulkCreate(countries);
      console.log("Countries loaded!");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { loadDB };
