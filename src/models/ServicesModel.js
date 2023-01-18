const dataBase = require("../database/db.json");


const ServicesModel = {
  findAll:()=>{

    const services = dataBase.services;
    

    return services;
  }
}


module.exports = ServicesModel;