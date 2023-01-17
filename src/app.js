const express = require("express");
const app = express();

const port = 3000;
const fs = require("fs");
const path = require("path");



const cadastroRouter = require("./routers/cadastroRouter");
const contatoRouter = require("./routers/contatoRouter");
const indexRouter = require("./routers/indexRouter");
const loginRouter = require("./routers/loginRouter");
const servicosRouter = require("./routers/servicosRouter");
const sobreRouter = require("./routers/sobreRouter");




app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));


app.use(express.json());
app.use(express.static(path.resolve("src", "public")));


// app.get("/", (req, res)=>{
//   res.send("Express Works!");
// })

app.use(cadastroRouter);
app.use(contatoRouter);
app.use(indexRouter);
app.use(loginRouter);
app.use(servicosRouter);
app.use(sobreRouter);



app.listen(port, ()=>{
  console.log(`Servidor rodando na porta:${port}`);
});