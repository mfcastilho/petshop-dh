const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const {body} = require("express-validator");

const AdminController = require("../controllers/AdminController.js");



const storage = multer.diskStorage({
  destination: (req, file, callback)=>{
    callback(null, "src/public/img");
  },
  filename:(req, file, callback)=>{
    callback(null,`${Date.now()}_img_${file.originalname}`);
  }
});

const uploadFile = multer({storage:storage});

//===Configuração de validação do cadastro de produtos===
const registerValidation = [
  body("name").notEmpty().withMessage("Nome inválido!"),
  body("price").notEmpty().withMessage("Preço inválido"),
  body("description").notEmpty().withMessage("Descrição inválida!")
];

router.get("/admin/home", AdminController.showHomeAdmin);
router.get("/admin/servicos/cadastrar", AdminController.showCadastroServicos);
router.get("/admin/login", AdminController.showLoginAdmin);

router.get("/admin/servicos/:id/editar", AdminController.showEditarServicos);



router.post(
  "/admin/servicos/cadastrar", 
  registerValidation, 
  uploadFile.single("image"), 
  AdminController.storeService);

router.put("/admin/servicos/:id/editar",uploadFile.single("image"), AdminController.updateService);

router.delete("/admin/servicos/:id/deletar", AdminController.deleteService);

module.exports = router;