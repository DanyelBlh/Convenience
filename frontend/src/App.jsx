import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './paginas/Home';
import Destinos from './paginas/Destinos';
import Sobre from './paginas/Sobre';
import Login from './paginas/Login';
import Layout from './layout/Layout';
import Orcamentos from './paginas/Orcamentos';



function App() {
  return (
    
     <>
        <Routes>
          <Route path='/' element={<Layout><Home/></Layout>} />
          <Route path='/destinos' element={<Layout><Destinos/></Layout>} />
          <Route path='/orcamentos' element={<Layout><Orcamentos/></Layout>} />
          <Route path='/sobre' element={<Layout><Sobre/></Layout>} />
          <Route path='/login' element={<Layout><Login/></Layout>} />
        </Routes>
     </>
      
    
  );
}



export default App;
