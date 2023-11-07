const LoginController = require('../controllers/LoginController');
const express = require('express');

const Router = express.Router();

Router.get('/', LoginController.listar);
Router.get('/:id', LoginController.buscarPorId);
Router.post('/', LoginController.salvar);
Router.put('/:id', LoginController.atualizar);
Router.delete('/:id', LoginController.excluir);

module.exports = Router;
