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
          <Link to="#">Quienes somos</Link>
          <Link to="#">Promociones</Link>
          <Link to="#">Crece mi negocio</Link>
          <Link to="#">Asesoria</Link>
          <Link to="/preguntas-frecuentes">Donde comprar</Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
