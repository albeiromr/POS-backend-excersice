const express = require("express");
const productoRouter = require("../api/producto/producto");
const router = express.Router();

router.use("/producto", productoRouter);

module.exports = router;