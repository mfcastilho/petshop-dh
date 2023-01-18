const dataBase = require("../database/db.json");


const Service = {
  findAll:()=>{

    const services = dataBase.services;

    return services
  }
}


module.exports = Service;