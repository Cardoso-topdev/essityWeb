import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/Logo.svg";

const Navbar = () => {
  return (
    <div className="section-nav">
      <div className="navigation container">
        <Link to="/">
          <img src={Logo} />
        </Link>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/quienes-somos">Quienes somos</Link>
          <Link to="/not-found">Promociones</Link>
          <Link to="/crece-mi-negocio">Crece mi negocio</Link>
          <Link to="/preguntas-frecuentes">Asesoria</Link>
          <Link to="/not-found">Donde comprar</Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
