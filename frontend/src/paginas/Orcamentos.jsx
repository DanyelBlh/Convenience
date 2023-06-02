import axios from 'axios';
import { useState, useEffect } from 'react';


function Orcamentos(){
    
    const [pacote, setPacote] = useState(null);
    const [pacotes, setPacotes] = useState([]);
    
    function novoPacote(){
        setPacote({
            codigo: "",
            nome: "",
            destino: "",
            descricao: "",
            partida: "",
            chegada: ""

        });
    }

    function cancelar(){
        setPacote(pacote);
    }

    function editarPacote() {
        setPacote(pacote);
    }

    function salvarPacote(){
        if(pacote.codigo) {
            axios.put("http://localhost:3005/pacotes/" + pacote.codigo, pacote)
                .then((res) => {
                    refresh();
                });
        } else {
            axios.post("http://localhost:3005/pacotes", pacote).then((res) => {
                refresh();
            });
        }
    }

    function refresh(){
        cancelar();
        getPacotes();
    }



    function getPacotes(){
        axios.get("http://localhost:3005/pacotes")
            .then((resposta) => { 
                setPacotes(resposta.data);
            });
    }
    useEffect(getPacotes, []);

    function excluirPacote(codigo){
        axios.delete("http://localhost:3005/pacote/" + codigo)
            .then(() => {
                getPacotes();
            });
    }


    <div>
        <h2>Pacotes</h2>
        <button>Novo Pacote</button>
            {getTabela()}
    </div>

    function getTabela() {
        return(
            <table>
                <tr>
                    <th>Nome</th>
                    <th>Destino</th>
                    <th>Descrição</th>
                    <th>Data de partida</th>
                    <th>Data de retorno</th>
                </tr>
                {getLinhas()}
            </table>
        )
    }

    function getLinhas() {
        const linhas = [];
        for(let i = 0; i < pacotes.length; i++) {
            const pacote = pacotes[i];
            linhas[i] = getLinha(pacote);
        }
        return linhas;
    }

    function getLinha(pacote) {
        return(
            <tr>
                <td>{pacote.nome}</td>
                <td>{pacote.destino}</td>
                <td>{pacote.descricao}</td>
                <td>{pacote.partida}</td>
                <td>{pacote.chegada}</td>
                <td>
                    <button onClick={() => {
                        if(
                            window.confirm("Confirmar a exclusão do pacote?")
                        ) {
                        excluirPacote(pacote.codigo);
                        }
                    }}
                    ></button>
                    Excluir

                    <button onClick={() => {
                        editarPacote(pacote);
                    }}> Editar 
                    </button>
                </td>
            </tr>
        );
    }

    
  

   
}

export default Orcamentos;