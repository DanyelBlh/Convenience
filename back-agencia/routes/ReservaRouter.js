const ReservaController = require('../controllers/ReservaController');
const express = require('express');

const Router = express.Router();

Router.get('/', ReservaController.listar);
Router.get('/:id', ReservaController.buscarPorId);
Router.post('/', ReservaController.salvar);
Router.put('/:id', ReservaController.atualizar);
Router.delete('/:id', ReservaController.excluir);

module.exports = Router;