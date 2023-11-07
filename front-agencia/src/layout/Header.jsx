import React from "react";
import logo from "../imagens/logo2.png"
import { NavLink } from "react-router-dom";
import Home from "../paginas/Home";

function Header(){
    return (
      <header>
        <div className="logo">
        <NavLink to="/"><img src={logo} alt="" width ="35%" /></NavLink>
        </div>
      </header>
    );
}

export default Header;