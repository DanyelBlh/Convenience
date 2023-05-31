import axios from 'axios';
import { useState, useEffect } from 'react';



function Orcamentos(){
    
    const [pacotes, setPacotes] = useState([]);
    function getPacotes(){
        axios.get("http://localhost:3005/pacotes")
            .then((resposta) => { 
                setPacotes(resposta.data);
            });
    }
    useEffect(getPacotes, []);
}

export default Orcamentos;