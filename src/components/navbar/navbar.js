import React from "react";
import Logo from "../../assets/img/Logo.svg";
import { GoThreeBars } from "react-icons/go";

const Navbar = () => {
  return (
    <div className="section-nav">
      <div className="navigation container">
        <button to="/" className="d-flex align-items-center">
          <img src={Logo} alt="" />
        </button>
        <button type="button" className="btn-navbar">
          <GoThreeBars />
        </button>
        <nav>
          <div className="link" onClick={() => (window.location.href = "/")}>
            Inicio
          </div>
          <div
            className="link"
            onClick={() => (window.location.href = "/quienes-somos")}
          >
            ¿Quiénes somos?
          </div>
          <div
            className="link"
            onClick={() => (window.location.href = "/promociones")}
          >
            Promociones
          </div>
          <div
            className="link"
            onClick={() => (window.location.href = "/crece-mi-negocio")}
          >
            Crece mi negocio
          </div>
          <div
            className="link"
            onClick={() => (window.location.href = "/asesoria")}
          >
            Asesoría
          </div>
          <div
            className="link"
            onClick={() => (window.location.href = "/donde-comprar")}
          >
            Donde comprar
          </div>
          <div
            className="link"
            onClick={() => (window.location.href = "/preguntas-frecuentes")}
          >
            Preguntas frecuentes
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
