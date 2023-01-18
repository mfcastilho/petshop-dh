const ServicesModel = require("../models/ServicesModel");


const AdminController = {
  showHomeAdmin:(req, res)=>{

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

    res.render("admin/home-admin.ejs", {services:servicosMapeado});
  }
}


module.exports = AdminController;