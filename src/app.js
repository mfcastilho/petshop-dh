//=== IMPORTAÇÕES ===   
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");

const authRouter = require("./routers/authRouter");
const contatoRouter = require("./routers/contatoRouter");
const indexRouter = require("./routers/indexRouter");
const servicosRouter = require("./routers/servicosRouter");
const sobreRouter = require("./routers/sobreRouter");
const adminRouter = require("./routers/adminRouter");


//=== VARIÁVEIS ===
const port = 5000;
const app = express();


app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));

app.use(methodOverride("_method"));

app.use(express.json());
app.use(express.static(path.resolve("src", "public")));
app.use(express.urlencoded({extended:true}));


//===ROTAS===
app.use(authRouter);
app.use(contatoRouter);
app.use(indexRouter);
app.use(servicosRouter);
app.use(sobreRouter);
app.use(adminRouter);



app.listen(port, ()=>{
  console.log(`Servidor rodando na porta:${port}`);
});