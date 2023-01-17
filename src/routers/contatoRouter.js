const express = require("express");
const router = express.Router();
const ContatoController = require("../controllers/ContatoController")


router.get("/contato", ContatoController.showCadastro)


module.exports = router;