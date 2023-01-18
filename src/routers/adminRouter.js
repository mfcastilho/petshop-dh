const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/AdminController.js");


router.get("/admin/home", AdminController.showHomeAdmin);


module.exports = router;