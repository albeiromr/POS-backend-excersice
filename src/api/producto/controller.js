const producto = require("../../models/producto");

const todosController = async (request, response) => {
  try {
    const data = await producto.findAll();
    response.send(data);
  } catch (error) {
    response.send(error.message);
  }
};


module.exports = {
    todosController
};