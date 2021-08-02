const usuario = require("../../models/usuario");

const individualUsuarioController = async (request, response) => {
  try {
    const data = await usuario.findOne({
      where: { nombreUsuario: request.params.nombreUsuario },
    });
    response.send(data);
  } catch (error) {
    response.send(error.message);
  }
};

module.exports = {
  individualUsuarioController,
};
