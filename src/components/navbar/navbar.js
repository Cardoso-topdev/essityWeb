import React, { Fragment } from "react";
import Logo from "../../assets/img/Logo.svg";
import { GoThreeBars } from "react-icons/go";

const Navbar = () => {
  return (
    <Fragment>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <div class="navbar-brand" style={{cursor: 'pointer'}}href="#">
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
                <div
                  className="nav-link active"
                  aria-current="page"
                  onClick={() => (window.location = "/")}
                >
                  Inicio
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link active"
                  onClick={() => (window.location = "/quienes-somos")}
                >
                  ¿Quiénes somos?
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link active"
                  onClick={() => (window.location = "/promociones")}
                >
                  Promociones
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link active"
                  onClick={() => (window.location = "/crece-mi-negocio")}
                >
                  Crece mi negocio
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link active"
                  onClick={() => (window.location = "/asesoria")}
                >
                  Asesoría
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link active"
                  onClick={() => (window.location = "/donde-comprar")}
                >
                  Donde comprar
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link active"
                  onClick={() => (window.location = "/preguntas-frecuentes")}
                >
                  Preguntas frecuentes
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
