import React from "react";
import axios from "axios";
import "./Login.css";
import "./Components.jsx";
import { useState, useEffect } from "react";





function Login(){
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('errad');

    const handleLogin = async (event) => {
        event.preventDefault();

        console.log(email, password);

        try {
            const response = await axios.post('http://localhost:3005/login',
                JSON.stringify({email, password}),
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );
        }
        catch (error) {
            if(!error?.response) {
                setError('Ops, ocorreu um erro no login!');
            } else if (error.response.status == 401) {
                setError('Usuário ou senha inválidos');
            }
        }
    };

  

      return (

        <div class="login-div">
            <form class="login-form">
                <h1>Acessar</h1>
                
                <input class="login-input" 
                    type="email" 
                    name='email'
                    placeholder="Email"
                    required
                    onChange={(event) => setEmail(event.target.value)}
                    
                />

                <input class="login-input" 
                    type="password" 
                    name='senha'
                    placeholder="Senha"
                    required
                    onChange={(event) => setPassword(event.target.value)}
                    
                />

                <button
                    type="button"
                    onClick={() => {
                        (event) => handleLogin(event)
                    }}
                    
                    
                

                >Entrar</button>
                   
                <div>
                    <p>Não possui conta?</p>
                    <a>Cadastrar</a>
                </div>
            </form>

            <p>{error}</p>
        </div>

    )
}

export default Login;