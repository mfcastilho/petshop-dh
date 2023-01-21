const ServicesModel = require("../models/ServicesModel");
const makeId = require("uuid").v4;


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
  },
  storeService: (req, res)=>{
    const {name, price, description} = req.body;

    const image = `/img/${req.file.filename}`;

    const newService = {
      id:makeId(),
      name,
      price:parseFloat(price),
      image,
      description
    }

    ServicesModel.create(newService);

    res.redirect("/admin/home");

  },
  updateService:( req, res)=>{





  },
  deleteService: (req, res)=>{
    const {id} = req.params;

    const services = ServicesModel.findAll();
    const serviceIndex = services.findIndex(service=>service.id == id);
    ServicesModel.delete(serviceIndex);

    return res.redirect("/admin/home");

  }

}


module.exports = AdminController;