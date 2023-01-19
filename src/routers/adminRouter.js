const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/AdminController.js");


router.get("/admin/home", AdminController.showHomeAdmin);
router.get("/admin/servicos/cadastrar", AdminController.showCadastroServicos);
router.get("/admin/servicos/:id/editar", AdminController.showEditarServicos);
router.get("/admin/login", AdminController.showLoginAdmin);


module.exports = router;