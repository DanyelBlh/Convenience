import "./Cadastros.css";
import axios from "axios";
import Aside from "../layout/Aside";
import { useState, useEffect } from "react";

function Reservas() {
  //Entidades e listas utilizadas na página
  const [reserva, setReserva] = useState(null);
  const [reservas, setReservas] = useState([]);

  //Funções de carregamento de dados do backend
  function getReservas() {
    axios.get("http://localhost:3005/reservas").then((resposta) => {
      setReservas(resposta.data);
    });
  }

  useEffect(() => {
    getReservas();
  }, []);

 
  //Funções para geração da tabela
  function getLinhaDaTabela(reserva) {
    return (
      <tr key={reserva._id}>
        <td>{reserva._id}</td>
        <td>{reserva.idPacote}</td>
        <td>{reserva.idCliente}</td>
        <td>{reserva.nomeCliente}</td>
        <td>{reserva.dataReserva}</td>
        <td>{reserva.numPessoas}</td>
      </tr>
    );
  }

  function getLinhasDaTabela() {
    const linhasDaTabela = [];
    for (let i = 0; i < reservas.length; i++) {
      const reserva = reservas[i];
      linhasDaTabela[i] = getLinhaDaTabela(reserva);
    }
    return linhasDaTabela;
  }

  function getTabela() {
    return (
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>ID do Pacote</th>
            <th>ID do Cliente</th>
            <th>Nome do Cliente</th>
            <th>Data da Reserva</th>
            <th>Número de Pessoas</th>
          </tr>
          {getLinhasDaTabela()}
        </tbody>
      </table>
    );
  }

  //Função do conteúdo principal
  function getConteudo() {
    if (reserva == null) {
      return (
        <>
          {getTabela()}
        </>
      );
    } else {
      return getFormulario();
    }
  }

  return (
    <div className="cadastros">
      <Aside />
      <div className="conteudo">
        <h2>Lista de Reservas</h2>
        {getConteudo()}
      </div>
    </div>
  );
}

export default Reservas;