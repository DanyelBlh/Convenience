const express = require("express");
const Router = express.Router();

//Ativa a autenticação e autorização
//const Auth = require('../auth/Auth');
//Router.use(Auth.autorizar);

const ClienteRouter = require("./ClienteRouter");
Router.use("/clientes", ClienteRouter);

const PacoteRouter = require("./PacoteRouter");
Router.use("/pacotes", PacoteRouter);

const ReservaRouter = require("./ReservaRouter");
Router.use("/reservas", ReservaRouter);

const LoginRouter = require("./LoginRouter");
Router.use("/login", LoginRouter);

module.exports = Router;
