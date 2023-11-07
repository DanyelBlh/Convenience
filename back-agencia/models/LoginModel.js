const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
    _id: { type: Number, required: true, default: -1 },
    email: { type: String, required: true },
    password: { type: String, required: true}
   
}, { 
  versionKey: false 
});

LoginSchema.pre('save', async function(next){
  if (this._id < 1){
    const Model = mongoose.model('login', LoginSchema);
    const objMaxId = await Model.findOne().sort({'_id': -1});
    this._id = objMaxId == null ? 1 : objMaxId._id + 1;
  }
  next();
});

module.exports = {
  LoginSchema: LoginSchema,
  LoginModel: mongoose.model('login', LoginSchema)
}