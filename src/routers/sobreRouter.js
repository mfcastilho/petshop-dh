const express = require("express");
const router = express.Router();
const SobreController = require("../controllers/SobreController");


router.get("/sobre", SobreController.showCadastro);




module.exports = router;