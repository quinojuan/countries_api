const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { loadDB } = require("./src/loadDB/loadDB.js");

// Syncing all the models at once.
conn.sync({ force: false }).then(async () => {
  try {
    await loadDB();
  } catch (error) {
    console.log(error);
  }
  server.listen(process.env.PORT || 3001, () => {
    console.log(`Server listening on port 3001`); // eslint-disable-line no-console
  });
});