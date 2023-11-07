const PacoteModel = require('../models/PacoteModel').PacoteModel;

class PacoteController {

  async listar(req, res){ 
    const resultado = await PacoteModel.find({});
    res.json(resultado);
  }

  async buscarPorId(req, res){
    const id = req.params.id;
    const pacote = await PacoteModel.findOne({'_id': id});
    res.json(pacote);
  }

  async salvar(req, res) { 
    const pacote = req.body;
    const resultado = await PacoteModel.create(pacote);
    res.json(resultado);
  }

  async atualizar(req, res){
    const id = req.params.id;
    const pacote = req.body;        
    const resultado = await PacoteModel.findOneAndUpdate({'_id': id}, pacote, {new: true});
    res.json(resultado);
  }

  async excluir(req, res){
    const id = req.params.id;
    await PacoteModel.findOneAndDelete({'_id': id});
    res.send("Excluído(a) com sucesso!");
  }
}

module.exports = new PacoteController();