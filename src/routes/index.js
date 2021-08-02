const express = require("express");
const productoRouter = require("../api/producto/producto");
const usuarioRouter = require("../api/usuario/usuario");
const router = express.Router();

router.use("/producto", productoRouter);
router.use("/usuario", usuarioRouter);

module.exports = router;