const dataBase = require("../database/db.json");
const fs = require("fs");
const path = require("path");

const pathDataBase = path.resolve("src", "database", "db.json");


const ServicesModel = {
  findAll:()=>{
    const services = dataBase.services;
    
    return services;
  },
  create:(service)=>{
    dataBase.services.push(service);

    const dbJSON = JSON.stringify(dataBase);
    fs.writeFileSync(pathDataBase, dbJSON);

  },
  update:(service)=>{

  },
  delete:(serviceIndex)=>{

    dataBase.services.splice(serviceIndex,1);
    const dbJSON = JSON.stringify(dataBase);
    fs.writeFileSync(pathDataBase, dbJSON);
    
  }
}


module.exports = ServicesModel;