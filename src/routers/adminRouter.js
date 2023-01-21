const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

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


router.get("/admin/home", AdminController.showHomeAdmin);
router.get("/admin/servicos/cadastrar", AdminController.showCadastroServicos);
router.get("/admin/servicos/:id/editar", AdminController.showEditarServicos);
router.get("/admin/login", AdminController.showLoginAdmin);


router.post("/admin/servicos/cadastrar",uploadFile.single("image"), AdminController.storeService);

router.delete("/admin/servicos/:id/deletar", AdminController.deleteService);

module.exports = router;