const express = require("express");
const productoRouter = express.Router();
const todosController = require("./controller").todosController;
const productoIndividualController = require("./controller").productoIndividualController;
const crearProductoController = require("./controller").crearProductoController;
const borrarProductoController = require("./controller").borrarProductoController;

productoRouter.get("/todos", todosController);
productoRouter.get("/individual/:idDeProducto", productoIndividualController);
productoRouter.post("/crear", crearProductoController);
productoRouter.delete("/borrar/:idDeProducto", borrarProductoController)


module.exports = productoRouter;