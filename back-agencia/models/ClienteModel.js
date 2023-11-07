const mongoose = require('mongoose');

const CadastroSchema = new mongoose.Schema({
  _id: { type: Number, default: -1 },
  nome: { type: String, required: true  },
  sobrenome: { type: String, required: true  },
  email: { type: String, required: true  },
  senha: { type: String, required: true  },
  
}, { 
  versionKey: false 
});

CadastroSchema.pre('save', async function(next){
  if (this._id < 1){
    const Model = mongoose.model('cadastro', CadastroSchema);
    const objMaxId = await Model.findOne().sort({'_id': -1});
    this._id = objMaxId == null ? 1 : objMaxId._id + 1;
  }
  next();
});



module.exports = {
  CadastroSchema: CadastroSchema,
  CadastroModel: mongoose.model('cadastro', CadastroSchema)
}