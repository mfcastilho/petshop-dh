const express = require("express");
const router = express.Router();
const ServicosController = require("../controllers/ServicosController");


router.get("/servicos", ServicosController.showServicos);




module.exports = router;