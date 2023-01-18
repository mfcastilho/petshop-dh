
const AuthController = {

  showLogin: (req, res)=>{
    res.render("auth/login.ejs");
  },
  showCadastro: (req, res)=>{
    res.render("auth/cadastro.ejs");
  }

}


module.exports = AuthController;