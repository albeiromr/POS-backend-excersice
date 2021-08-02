const express = require("express");
const productoRouter = express.Router();
const todosController = require("./controller").todosController;
const productoIndividualController = require("./controller").productoIndividualController;

productoRouter.get("/todos", todosController);
productoRouter.get("/individual/:idDeProducto", productoIndividualController);


module.exports = productoRouter;