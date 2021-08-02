const producto = require("../../models/producto");

const todosController = async (request, response) => {
  try {
    const data = await producto.findAll();
    response.send(data);
  } catch (error) {
    response.send(error.message);
  };
};

const productoIndividualController = async(request, response) => {
  try{
    const data = await producto.findOne({where: {codigo: request.params.idDeProducto}});
    response.send(data);
  }catch(error){
    response.send(error.message);
  };
};


module.exports = {
    todosController,
    productoIndividualController
};