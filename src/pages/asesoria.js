import React from "react";
import { Fragment } from "react";

//components
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import SabaSeccion from "../components/asesoria-secciones/saba";
import RegioSeccion from "../components/asesoria-secciones/regio";

import img49 from "../assets/img/img49.jpg";
import TenaSeccion from "../components/asesoria-secciones/tena";

const Asesoria = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="hero-asesoria">
        <div className="container">
          <div className="col-img">
            <img src={img49} />
          </div>
          <div className="info-asesoria">
            <h1>Asesoría</h1>
            <p>
              SAP anuncia la creación de la mayor red empresarial del mundo en
              su evento "Sapphire Now 2021
            </p>
          </div>
        </div>
      </div>

      <div className="container contenido-asesoria">
        <h2>Portafolio ideal</h2>
        <div className="filter">
          <p>Filtrar por</p>
          <button className="btn btn-primary btn-filter mr-3">
            Todos los productos
          </button>
          <button className="btn btn-primary mr-3 btn-filter">Saba</button>
          <button className="btn btn-primary mr-3 btn-filter">Tena</button>
          <button className="btn btn-primary mr-3 btn-filter">Regio</button>
        </div>
      </div>

      <SabaSeccion />
      <RegioSeccion />
      <TenaSeccion />

      <Footer />
    </Fragment>
  );
};

export default Asesoria;
