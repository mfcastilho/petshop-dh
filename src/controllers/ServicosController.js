const ServicesModel = require("../models/Service");



const ServicosController = {
  showCadastro: (req, res)=>{

    const services = ServicesModel.findAll();
    res.render("servicos.ejs", {services});
  }
}


module.exports =ServicosController;