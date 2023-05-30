import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './paginas/Home';
import Destinos from './paginas/Destinos';
import Orcamentos from './paginas/Orcamentos';
import Sobre from './paginas/Sobre';
import Login from './paginas/Login';
import Layout from './layout/Layout';



function App() {
  return (
    
     <>
        <Routes>
          <Route path='/' element={<Layout><Home/></Layout>} />
          <Route path='/' destinos={<Layout><Destinos/></Layout>} />
          <Route path='/' orcamentos={<Layout><Orcamentos/></Layout>} />
          <Route path='/' sobre={<Layout><Sobre/></Layout>} />
          <Route path='/' login={<Layout><Login/></Layout>} />
        </Routes>
     </>
      
    
  );
}



export default App;
