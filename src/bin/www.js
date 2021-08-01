const app = require("../app");
const dotenv = require("dotenv");
const producto = require("../models/producto");

dotenv.config({ path: `${__dirname}/../../.env` });

const port = process.env.port || 5000;

app.listen(port, async () => {
  const data = await producto.findAll();
  console.log(data)
});
