const server = require("./src/app.js");
const {
  getAllCountriesBaseDatos,
} = require("./src/controllers/countriesBaseDatos.js");
const { conn } = require("./src/db.js");

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(process.env.PORT, async () => {
    console.log(`%s listening at ${process.env.PORT}`); // eslint-disable-line no-console
    await getAllCountriesBaseDatos();
  });
});
