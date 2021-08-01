const app = require("../app");
const dotenv = require("dotenv");
const usuario = require("../models/usuario")

dotenv.config({ path: `${__dirname}/../../.env` });

const port = process.env.port || 5000;

app.listen(port, async () => {
  console.log(`Escuchando en puerto ${port}`)
});
