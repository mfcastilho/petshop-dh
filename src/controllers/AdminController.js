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
  },
  showCadastroServicos:(req, res)=>{

    res.render("admin/services/cadastro-servico.ejs");
  },
  showEditarServicos: (req, res)=>{

    res.render("admin/services/editar-servico.ejs");
  },
  showLoginAdmin: (req, res)=>{

    res.render("admin/auth/login-admin.ejs");
  }

}


module.exports = AdminController;