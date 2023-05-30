import { NavLink } from 'react-router-dom';

function Nav(){
    return(
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/destinos">Destinos</NavLink></li>
                <li><NavLink to="/orcamentos">Orçamentos</NavLink></li>
                <li><NavLink to="/sobre">Sobre</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
               
            </ul>
        </nav>
    );
}

export default Nav;