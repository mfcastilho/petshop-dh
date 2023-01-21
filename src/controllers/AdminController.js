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

    const {id} = req.params;
    

    const servicos = ServicesModel.findAll();
    
    const serviceFound = servicos.find(servico=>servico.id == id);

    if(serviceFound == undefined){
      return res.send("Serviço não encontrado");
    }
    
    return res.render("admin/services/editar-servico.ejs", {service:serviceFound});
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

    const {id} = req.params;

    const services = ServicesModel.findAll();

    const service = services.find(service=>service.id == id);
    const serviceIndex = services.findIndex(service=>service.id == id);
    let img;

    console.log(service)

    let {name, price, description, image} = req.body;



    if(req.file.filename == undefined){
      
      img = image;
    }else{
      img = `/img/${req.file.filename}`;
    }
    

    if(name == undefined){
      name=service.name;
      
    }
    if(price == undefined){
      price=service.price;
    }

    if(description==undefined){
      description=service.description;
    }

  
    const serviceUpdate = {
      id,
      name,
      price,
      image:img,
      description
    }

    ServicesModel.update(serviceUpdate, serviceIndex);

    res.redirect("/admin/home", {service:serviceUpdate});

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