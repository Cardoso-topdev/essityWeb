import React, { Fragment } from "react";
import Logo from "../../assets/img/Logo.svg";
import { GoThreeBars } from "react-icons/go";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Fragment>
      <div
        style={{
          backgroundColor: "#F50000",
          textAlign: "center",
          color: "#ffff",
          fontSize: "20px",
          padding: "2px 0",
          cursor: "pointer",
        }}
        onClick={() => (window.location.href = "/cuestionario")}
      >
        <p>¡CLIC AQUÍ Y RECIBE GRATIS PRODUCTO DE REGIO Y SABA!</p>
      </div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <div class="navbar-brand" style={{ cursor: "pointer" }} href="#">
            <img src={Logo} />
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link active"
                  exact
                  activeStyle={{ color: "#f50082" }}
                >
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/quienes-somos"
                  className="nav-link active"
                  exact
                  activeStyle={{ color: "#f50082" }}
                >
                  Quienes Somos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/promociones"
                  className="nav-link active"
                  exact
                  activeStyle={{ color: "#f50082" }}
                >
                  Promociones
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/crece-mi-negocio"
                  className="nav-link active"
                  exact
                  activeStyle={{ color: "#f50082" }}
                >
                  Crece Mi Negocio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/asesoria' className="nav-link active" exact activeStyle={{color: "#f50082"}}>Portafolio</NavLink> 
              </li>
              <li className="nav-item">
                <NavLink
                  to="/donde-comprar"
                  className="nav-link active"
                  exact
                  activeStyle={{ color: "#f50082" }}
                >
                  Dónde Comprar
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/preguntas-frecuentes"
                  className="nav-link active"
                  exact
                  activeStyle={{ color: "#f50082" }}
                >
                  Preguntas Frecuentes
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
