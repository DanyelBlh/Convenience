const LoginModel = require('../models/LoginModel').LoginModel;

class LoginController {

  async listar(req, res){ 
    const resultado = await LoginModel.find({});
    res.json(resultado);
  }

  async buscarPorId(req, res){
    const id = req.params.id;
    const login = await LoginModel.findOne({'_id': id});
    res.json(login);
  }

  async salvar(req, res) { 
    const login = req.body;
    
    const resultado = await LoginModel.find(login);
    res.json(resultado);
  }

  async atualizar(req, res){
    const id = req.params.id;
    const login = req.body;        
    const resultado = await LoginModel.findOneAndUpdate({'_id': id}, login, {new: true});
    res.json(resultado);
  }

  async excluir(req, res){
    const id = req.params.id;
    await LoginModel.findOneAndDelete({'_id': id});
    res.send("Excluído(a) com sucesso!");
  }
}

module.exports = new LoginController();