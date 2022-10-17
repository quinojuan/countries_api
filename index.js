const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { loadDB } = require("./src/loadDB/loadDB.js");

// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {
  try {
    await loadDB(); // carga de datos en la base de datos
  } catch (error) {
    console.log(error);
  }
  server.listen(process.env.PORT || 4000, () => {
    console.log(`Server working`); // eslint-disable-line no-console
  });
});