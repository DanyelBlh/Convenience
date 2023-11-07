import "./Cadastros.css";
import axios from "axios";
import Aside from "../layout/Aside";
import { useState, useEffect } from "react";

function Pacotes() {
  //Entidades e listas utilizadas na página
  const [pacote, setPacote] = useState(null);
  const [pacotes, setPacotes] = useState([]);

  //Funções de carregamento de dados do backend
  function getPacotes() {
    axios.get("http://localhost:3005/pacotes").then((resposta) => {
      setPacotes(resposta.data);
    });
  }

  useEffect(() => {
    getPacotes();
  }, []);

  //Funções para manipulação da entidade principal
  function novoPacote() {
    setPacote({
      nome: "",
      destino: "",
      descricao: "",
      preco: "",
      partida: "",
      chegada: ""
    });
  }

  
  function alterarPacote(campo, valor, id) {
    setPacote((atualizarPacote) => ({
      ...atualizarPacote, _id: id,
      [campo]: valor,
    }));
  }

  function excluirPacote(id) {
    axios.delete("http://localhost:3005/pacotes/" + id).then(() => {
      reiniciarEstadoDosObjetos();
    });
  }

  function salvarPacote() {
    if (pacote._id) {
      axios.put("http://localhost:3005/pacotes/" + pacote._id, pacote).then(() => {
        reiniciarEstadoDosObjetos();
        
      });
    } else {
      axios.post("http://localhost:3005/pacotes", pacote).then(() => {
       
        reiniciarEstadoDosObjetos();
        
      });
    }
  }

  function reiniciarEstadoDosObjetos() {
    setPacote(null);
    getPacotes();
  }

  //Função para geração do formulário
  function getFormulario() {
    return (
      <form>
        <label>Nome</label>
        <input
          type="text"
          name="nome"
          value={pacote.nome}
          onChange={(e) => {
            alterarPacote(e.target.name, e.target.value, pacote._id);
          }}
        />
        <label>Destino</label>
        <input
          type="text"
          name="destino"
          value={pacote.destino}
          onChange={(e) => {
            alterarPacote(e.target.name, e.target.value, pacote._id);
          }}
        />
        <label>Descrição</label>
        <input
          type="text"
          name="descricao"
          value={pacote.descricao}
          onChange={(e) => {
            alterarPacote(e.target.name, e.target.value, pacote._id);
          }}
        />
        <label>Preço</label>
        <input
          type="text"
          name="preco"
          value={pacote.preco}
          onChange={(e) => {
            alterarPacote(e.target.name, e.target.value, pacote._id);
          }}
        />
        <label>Partida</label>
        <input
          type="date"
          name="partida"
          value={pacote.partida}
          onChange={(e) => {
            alterarPacote(e.target.name, e.target.value, pacote._id);
          }}
        />
        <label>Chegada</label>
        <input
          type="date"
          name="chegada"
          value={pacote.chegada}
          onChange={(e) => {
            alterarPacote(e.target.name, e.target.value, pacote._id);
          }}
        />
        <button
          type="button"
          onClick={() => {
            salvarPacote();
          }}
        >
          Salvar
        </button>
        <button
          type="button"
          onClick={() => {
            setPacote(null);
          }}
        >
          Cancelar
        </button>
      </form>
    );
  }

  //Funções para geração da tabela
  function getLinhaDaTabela(pacote) {
    return (
      <tr key={pacote._id}>
        <td>{pacote._id}</td>
        <td>{pacote.nome}</td>
        <td>{pacote.destino}</td>
        <td>{pacote.descricao}</td>
        <td>{pacote.preco}</td>
        <td>{pacote.partida}</td>
        <td>{pacote.chegada}</td>
        <td>
          <button
            type="button"
            onClick={() => {
              if (
                window.confirm(
                  "Confirmar a exclusão do pacote de" + pacote.nome + "?"
                )
              ) {
                excluirPacote(pacote._id);
              }
            }}
          >
            Excluir
          </button>
          <button
            type="button"
            onClick={() => {
              setPacote(pacote);
            }}
          >
            Editar
          </button>
        </td>
      </tr>
    );
  }

  function getLinhasDaTabela() {
    const linhasDaTabela = [];
    for (let i = 0; i < pacotes.length; i++) {
      const pacote = pacotes[i];
      linhasDaTabela[i] = getLinhaDaTabela(pacote);
    }
    return linhasDaTabela;
  }

  function getTabela() {
    return (
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Nome do pacote</th>
            <th>Destino</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Partida</th>
            <th>Chegada</th>
          </tr>
          {getLinhasDaTabela()}
        </tbody>
      </table>
    );
  }

  //Função do conteúdo principal
  function getConteudo() {
    if (pacote == null) {
      return (
        <>
          <button
            type="button"
            onClick={() => {
              novoPacote();
            }}
          >
            Novo Pacote
          </button>
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
        <h2>Cadastro de Pacotes</h2>
        {getConteudo()}
      </div>
    </div>
  );
}

export default Pacotes;

