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

const crearProductoController = async(request, response) => {
  try {
    const nuevoProducto = await producto.create({
      codigo: request.body.codigo,
      nombre: request.body.nombre,
      unidad: request.body.unidad,
      precio: request.body.precio
    });
    response.send(nuevoProducto);
  }catch(error){
    console.log(error.message);
  };
}

const borrarProductoController = async(request, response) => {
  try{
    await producto.destroy({where: {codigo: request.params.idDeProducto}});
    response.send("producto borrado");
  }catch(error){
    response.send(error.message)
  }
};


module.exports = {
    todosController,
    productoIndividualController,
    crearProductoController,
    borrarProductoController
};