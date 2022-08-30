/////////////////////////// CARGAR LOS PAÍSES EN LA BASE DE DATOS ///////////////////////////

const axios = require("axios");
const { Country } = require("../db");

const loadDB = async () => {
  try {
    const validate = await Country.findOne({
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
          : "No provista por la API",
        subregion: country.subregion
          ? country.subregion
          : "No provista por la API",
        area: country.area,
        population: country.population,
      };
    });

    if (!validate) {
      // buscar una alternativa con create para entenderlo mejor y ver el proceso paso a paso
      await Country.bulkCreate(countries);
      console.log("Countries loaded!");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { loadDB };
