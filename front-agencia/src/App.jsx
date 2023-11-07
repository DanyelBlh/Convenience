import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './paginas/Home';
import Cadastros from './paginas/Cadastros';
import Reservas from './paginas/Reservas';
import Sobre from './paginas/Sobre';
import Pacotes from './paginas/Pacotes';
import Login from './paginas/login/Login';

function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Layout><Home/></Layout>} />
          <Route path='/cadastros' element={<Layout><Cadastros/></Layout>} />   
          <Route path='/pacotes' element={<Layout><Pacotes/></Layout>} />               
          <Route path='/reservas' element={<Layout><Reservas/></Layout>} />    
          <Route path='/sobre' element={<Layout><Sobre/></Layout>} />
          <Route path='/login' element={<Layout><Login/></Layout>} />
      </Routes>     
    </>
  );
}
export default App;
