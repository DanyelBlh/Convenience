const ReservaModel = require('../models/ReservaModel').ReservaModel;
const PacoteModel = require('../models/PacoteModel').PacoteModel;
const ClienteModel = require('../models/ClienteModel').ClienteModel;

class ReservaController {

  async listar(req, res){ 
    const resultado = await ReservaModel.find({});
    res.json(resultado);
  }

  async buscarPorId(req, res){
    const id = req.params.id;
    const reserva = await ReservaModel.findOne({'_id': id});
    res.json(reserva);
  }

  async salvar(req, res) { 
    const reserva = req.body;
    const idCliente = reserva.cliente;
    const idPacote = reserva.pacote;

    if (idCliente != null && idCliente != 'undefined' && idCliente != ''){
        // reserva.cliente = await ClienteModel.findOne({'_id': idCliente});
        const cliente = await ClienteModel.findOne({ '_id': idCliente });
        reserva.cliente = cliente.nome; 
    }

    if (idPacote != null && idPacote != 'undefined' && idPacote != ''){
        reserva.pacote = await PacoteModel.findOne({'_id': idPacote});
    }
  
    const resultado = await ReservaModel.create(reserva);

    // Realizar uma consulta separada para obter o nome do cliente
    const reservaComNomeCliente = await ReservaModel.findById(resultado._id).populate('nomeCliente');

    res.json(reservaComNomeCliente);
  }

  async atualizar(req, res){
    const id = req.params.id;
    const reserva = req.body;        
    const resultado = await ReservaModel.findOneAndUpdate({'_id': id}, reserva, {new: true});
    res.json(resultado);
  }

  async excluir(req, res){

    const id = req.params.id;
    await ReservaModel.findOneAndDelete({'_id': id});
    res.send("Excluído(a) com sucesso!");
  }
}

module.exports = new ReservaController();