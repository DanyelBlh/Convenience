const mongoose = require('mongoose');

const PacoteSchema = new mongoose.Schema({
    _id: { type: Number, required: true, default: -1 },
    nome: { type: String, required: true },
    destino: { type: String, required: true },
    descricao: { type: String, required: true },
    preco: { type: Number },
    partida: { type: Date },
    chegada: { type: Date }
}, { 
  versionKey: false 
});

PacoteSchema.pre('save', async function(next){
  if (this._id < 1){
    const Model = mongoose.model('pacote', PacoteSchema);
    const objMaxId = await Model.findOne().sort({'_id': -1});
    this._id = objMaxId == null ? 1 : objMaxId._id + 1;
  }
  next();
});

module.exports = {
  PacoteSchema: PacoteSchema,
  PacoteModel: mongoose.model('pacote', PacoteSchema)
}