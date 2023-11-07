const PacoteController = require('../controllers/PacoteController');
const express = require('express');

const Router = express.Router();

Router.get('/', PacoteController.listar);
Router.get('/:id', PacoteController.buscarPorId);
Router.post('/', PacoteController.salvar);
Router.put('/:id', PacoteController.atualizar);
Router.delete('/:id', PacoteController.excluir);

module.exports = Router;
