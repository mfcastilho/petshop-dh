const express = require("express");
const app = express();

const port = 3000;
const path = require("path");




const authRouter = require("./routers/authRouter");
const contatoRouter = require("./routers/contatoRouter");
const indexRouter = require("./routers/indexRouter");
const servicosRouter = require("./routers/servicosRouter");
const sobreRouter = require("./routers/sobreRouter");





app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));


app.use(express.json());
app.use(express.static(path.resolve("src", "public")));



app.use(authRouter);
app.use(contatoRouter);
app.use(indexRouter);
app.use(servicosRouter);
app.use(sobreRouter);



app.listen(port, ()=>{
  console.log(`Servidor rodando na porta:${port}`);
});