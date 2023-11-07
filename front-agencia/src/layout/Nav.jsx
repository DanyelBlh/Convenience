import { NavLink } from 'react-router-dom';

function Nav(){
return (
    <nav>
      
    <ul className='navbar'>
        <li><NavLink to="/">Home</NavLink></li> 
        <li><NavLink to="/cadastros">Cadastros</NavLink></li>
        <li><NavLink to="/sobre">Sobre</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
    </ul>
    
    </nav>
  );
}

export default Nav;