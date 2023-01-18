const ServicesModel = require("../models/ServicesModel");

const IndexController = {
  showIndex:(req, res)=>{

    const services = ServicesModel.findAll();
    const servicosMapeado = [];

    services.map(service=>{
      servicosMapeado.push({
        id: service.id,
        name: service.name,
        price: `R$ ${service.price.toLocaleString("pt-BR", {currency:"BRL", minimumFractionDigits:2})}`,
        description: service.description,
        image: service.image

      });
    })


    res.render("index.ejs", {services:servicosMapeado});
  }
  
}


module.exports = IndexController;