const express = require("express");
const productoRouter = express.Router();
const todosController = require("./controller").todosController;

productoRouter.get("/todos", todosController);


module.exports = productoRouter;