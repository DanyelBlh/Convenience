require("./db/MongoConnection.js");
const express = require("express");
const cors = require("cors");
const servidor = express();
servidor.use(express.json());
servidor.use(cors());

//Index e rotas de acesso livre
servidor.get("/", function (req, res) {
  const mensagem =
    "Servidor Matrix rodando...<br><br>" +
    '<a href="http://localhost:3005/doc">Listar APIs</a>';
  res.send(mensagem);
});

//Rotas
const routes = require("./routes/Routes.js");
servidor.use(routes);

//Inicialização
servidor.listen(3005, function () {
  console.log("Servidor rodando em http://localhost:3005");
});
