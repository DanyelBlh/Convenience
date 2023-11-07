import { NavLink } from "react-router-dom";

function Aside() {
  return (
    <aside className="menu-lateral">
      <ul>
        <li>
          <NavLink to="/cadastros">Clientes</NavLink>
        </li>
        <li>
          <NavLink to="/pacotes">Pacotes</NavLink>
        </li>
        <li>
          <NavLink to="/reservas">Reservas</NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Aside;
