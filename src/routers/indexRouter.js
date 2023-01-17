const express = require("express");
const router = express.Router();
const IndexController = require("../controllers/IndexController")


router.get("/", IndexController.showIndex);


module.exports = router;