const ClienteModel = require('../models/ClienteModel').ClienteModel;
const mongoose = require('mongoose');

const ReservaSchema = new mongoose.Schema({
    _id: { type: Number, required: true, default: -1 },
    idPacote: { type: Number, ref:'pacote', required: true },
    idCliente: { type: Number, ref:'cliente', required: true },
    nomeCliente: { type: String },
    dataReserva: { type: Date },
    numPessoas: { type: Number }
}, { 
  versionKey: false 
});

ReservaSchema.pre('save', async function(next){
  if (this._id < 1){
    const Model = mongoose.model('reserva', ReservaSchema);
    const objMaxId = await Model.findOne().sort({'_id': -1});
    this._id = objMaxId == null ? 1 : objMaxId._id + 1;
  }
  next();
});

ReservaSchema.pre('save', async function(next) {
  if (this.isModified('idCliente')) {
    const cliente = await ClienteModel.findOne({ _id: this.idCliente });
    if (cliente) {
      this.nomeCliente = cliente.nome;
    }
  }
  next();
});

module.exports = {
  ReservaSchema: ReservaSchema,
  ReservaModel: mongoose.model('reserva', ReservaSchema)
}