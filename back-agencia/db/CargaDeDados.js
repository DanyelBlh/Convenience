require('./MongoConnection.js');

const ClienteModel = require('../models/ClienteModel').ClienteModel;
const PacoteModel = require('../models/PacoteModel').PacoteModel;
const clientes = require('./jsons/clientes.json');
const pacotes = require('./jsons/pacotes.json');

async function carregar() {
  try {

    await ClienteModel.deleteMany({});
    for (const cliente of clientes) {
      await ClienteModel.create(cliente);
    }
    console.log('Clientes carregados!');

    await PacoteModel.deleteMany({});
    for (const pacote of pacotes) {
      await PacoteModel.create(pacote);
    }
    console.log('Pacotes carregados!');

  } catch (err) {
    console.log(err);
  } finally {
    process.exit();
  }
}

carregar();