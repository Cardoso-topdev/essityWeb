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
          <Link to="/quienes-somos">¿Quiénes somos?</Link>
          <Link to="/promociones">Promociones</Link>
          <Link to="/crece-mi-negocio">Crece mi negocio</Link>
          <Link to="/not-found">Asesoría</Link>
          <Link to="/donde-comprar">Donde comprar</Link>
          <Link to="/preguntas-frecuentes">Preguntas frecuentes</Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
