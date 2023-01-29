const ServicesModel = require("../models/ServicesModel");
const makeId = require("uuid").v4;
const { validationResult } = require("express-validator"); 


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

    return res.render("admin/home-admin.ejs", {services:servicosMapeado});
  },
  showCadastroServicos:(req, res)=>{

    return res.render("admin/services/cadastro-servico.ejs");
  },
  showEditarServicos: (req, res)=>{

    const {id} = req.params;
    

    const servicos = ServicesModel.findAll();
    
    const serviceFound = servicos.find(servico=>servico.id == id);

    if(serviceFound == undefined){
      return res.send("Serviço não encontrado");
    }
    
    return res.render("admin/services/editar-servico.ejs", {service:serviceFound});
  },
  showLoginAdmin: (req, res)=>{

    return res.render("admin/auth/login-admin.ejs");
  },
  storeService: (req, res)=>{
    const {name, price, description} = req.body;
    const errors = validationResult(req);

    //validação
    if(!errors.isEmpty()){
      return res.render("admin/services/cadastro-servico.ejs", {errors: errors.mapped(), old: req.body});
    }

    if(!req.file){
      const error = new Error("É necessário selecionar um arquivo!");
      error.httpStatusCode = 400;
      return next(error);
    }

    const image = `/img/${req.file.filename}`;

    const newService = {
      id:makeId(),
      name,
      price:parseFloat(price),
      image,
      description
    }

    ServicesModel.create(newService);

    return res.redirect("/admin/home");

  },
  updateService:( req, res)=>{

    const {id} = req.params;

    const services = ServicesModel.findAll();

    const service = services.find(service=>service.id == id);
    const serviceIndex = services.findIndex(service=>service.id == id);
    let img;

    console.log(service)

    let {name, price, description} = req.body;

    console.log(service.image);

    if(!req.file){
      img = service.image;
    }else{
      img = `/img/${req.file.filename}`
    }

    if(!name){
      name = service.name;
    }

    if(!price){
      price = service.price;
    }

    if(!description){
      description = service.description;
    }

    const serviceUpdate = {
      id,
      name,
      price,
      description,
      image:img
    }

    ServicesModel.update(serviceUpdate, serviceIndex);

    return res.redirect("/admin/home");

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