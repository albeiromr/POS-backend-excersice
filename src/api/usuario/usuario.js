const express = require("express");
const usuarioRouter = express.Router();
const individualUsuarioController = require("./controller").individualUsuarioController;

usuarioRouter.get("/:nombreUsuario", individualUsuarioController);

module.exports = usuarioRouter;