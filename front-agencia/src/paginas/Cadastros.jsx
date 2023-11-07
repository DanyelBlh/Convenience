import "./Cadastros.css";
import axios from "axios";
import Aside from "../layout/Aside";
import { useState, useEffect } from "react";

function Cadastros() {
  //Entidades e listas utilizadas na página
  const [cliente, setCliente] = useState(null);
  const [clientes, setClientes] = useState([]);

  //Funções de carregamento de dados do backend
  function getClientes() {
    axios.get("http://localhost:3005/clientes").then((resposta) => {
      setClientes(resposta.data);
    });
  }

  useEffect(() => {
    getClientes();
  }, []);

  //Funções para manipulação da entidade principal
  function novoCliente() {
    setCliente({
      nome: "",
      email: "",
      telefone: "",
      cep: "",
    });
  }

  //...atualizarCliente é uma cópia para presevar as informações fornecidas na hora do cadastro
  function alterarCliente(campo, valor, id) {
    setCliente((atualizarCliente) => ({
      ...atualizarCliente, _id: id,
      [campo]: valor,
    }));
  }

  function excluirCliente(id) {
    axios.delete("http://localhost:3005/clientes/" + id).then(() => {
      reiniciarEstadoDosObjetos();
    });
  }

  function salvarCliente() {
    if (cliente._id) {
      axios.put("http://localhost:3005/clientes/" + cliente._id, cliente).then(() => {
        reiniciarEstadoDosObjetos();
        
      });
    } else {
      axios.post("http://localhost:3005/clientes", cliente).then(() => {
       
        reiniciarEstadoDosObjetos();
        
      });
    }
  }

  function reiniciarEstadoDosObjetos() {
    setCliente(null);
    getClientes();
  }

  //Função para geração do formulário
  function getFormulario() {
    return (
      <form>
        <label>Nome</label>
        <input
          type="text"
          name="nome"
          value={cliente.nome}
          onChange={(e) => {
            alterarCliente(e.target.name, e.target.value, cliente._id);
          }}
        />
        <label>E-mail</label>
        <input
          type="text"
          name="email"
          value={cliente.email}
          onChange={(e) => {
            alterarCliente(e.target.name, e.target.value, cliente._id);
          }}
        />
        <label>Telefone</label>
        <input
          type="text"
          name="telefone"
          value={cliente.telefone}
          onChange={(e) => {
            alterarCliente(e.target.name, e.target.value, cliente._id);
          }}
        />
        <label>CEP</label>
        <input
          type="text"
          name="cep"
          value={cliente.cep}
          onChange={(e) => {
            alterarCliente(e.target.name, e.target.value, cliente._id);
          }}
        />
        <button
          type="button"
          onClick={() => {
            salvarCliente();
          }}
        >
          Salvar
        </button>
        <button
          type="button"
          onClick={() => {
            setCliente(null);
          }}
        >
          Cancelar
        </button>
      </form>
    );
  }

  //Funções para geração da tabela
  function getLinhaDaTabela(cliente) {
    return (
      <tr key={cliente._id}>
        <td>{cliente._id}</td>
        <td>{cliente.nome}</td>
        <td>{cliente.email}</td>
        <td>{cliente.telefone}</td>
        <td>{cliente.cep}</td>
        <td>
          <button
            type="button"
            onClick={() => {
              if (
                window.confirm(
                  "Confirmar a exclusão do cliente " + cliente.nome + "?"
                )
              ) {
                excluirCliente(cliente._id);
              }
            }}
          >
            Excluir
          </button>
          <button
            type="button"
            onClick={() => {
              setCliente(cliente);
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
    for (let i = 0; i < clientes.length; i++) {
      const cliente = clientes[i];
      linhasDaTabela[i] = getLinhaDaTabela(cliente);
    }
    return linhasDaTabela;
  }

  function getTabela() {
    return (
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Telefone</th>
            <th>CEP</th>
            <th>Ações</th>
          </tr>
          {getLinhasDaTabela()}
        </tbody>
      </table>
    );
  }

  //Função do conteúdo principal
  function getConteudo() {
    if (cliente == null) {
      return (
        <>
          <button id="botaonovo"
            type="button"
            onClick={() => {
              novoCliente();
            }}
          >
            Novo cliente
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
        <h2>Cadastro de Clientes</h2>
        {getConteudo()}
      </div>
    </div>
  );
}

export default Cadastros;




