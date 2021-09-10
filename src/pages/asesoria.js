import React from "react";
import { Fragment } from "react";

//components
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

import img49 from "../assets/img/img49.jpg";
import bn8 from "../assets/img/saba/nocturnas/bn8.jpg";
import bn10 from "../assets/img/saba/nocturnas/bn10.jpg";
import bn24 from "../assets/img/saba/nocturnas/bn24.jpg";
import con8 from "../assets/img/saba/nocturnas/con8.jpg";

import in10 from "../assets/img/saba/delgadas/in10.jpg";
import in42 from "../assets/img/saba/delgadas/in42.jpg";
import ultra10 from "../assets/img/saba/delgadas/ultra10.jpg";

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

      <div className="productos-saba mt-5">
        <div className="container">
          <div className="ml-5 pl-5 mb-5 saba-titulo">
            <h3>Productos Saba</h3>
            <p>Expande y fortalece tu portafolio</p>
          </div>
          <p className="fs-30 fw-500 lh-42">
            De cada 10 pesos de toalla femenina y pantiprotectores que se
            consumen en el país, 6 son de Saba®
          </p>
          <p>
            Saba se posiciona como líder en ambas categorías lo que ayudará a
            incrementar las ventas de tu negocio; además, las toallas sanitarias
            están consideradas como un derecho a la salud de las mujeres como
            productos de primera necesidad por lo que siempre buscamos innovar
            en nuestros productos. ¡Tus clientes siempre te los pedirán!
          </p>
        </div>
      </div>

      <div className="container">
        <h2>Toallas Femeninas</h2>
        <div className="card-productos mb-5">
          <h2 className="text-center pb-3">Nocturnas</h2>
          <div className="productos producto-flex">
            <div className="producto">
              <img src={bn8} />
              <p className="text-center">
                Buenas Noches
                <br /> con alas 8 piezas
              </p>
            </div>
            <div className="producto">
              <img src={bn24} alt="" />
              <p className="text-center">
                Buenas Noches
                <br /> con alas 24 piezas
              </p>
            </div>
            <div className="producto">
              <img src={bn10} alt="" />
              <p className="text-center">
                Buenas Noches
                <br /> con alas 10 piezas
              </p>
            </div>
            <div className="producto">
              <img src={con8} alt="" />
              <p className="text-center">
                Confort Nocturna
                <br /> con alas 8 piezas
              </p>
            </div>
          </div>
        </div>

        <div className="card-productos mb-5">
          <h2 className="text-center pb-3">Delgadas</h2>
          <div className="productos">
            <div className="producto">
              <img src={in10} />
              <p className="text-center">
                Delgadas <br />
                con alas 10 piezas
              </p>
            </div>
            <div className="producto">
              <img src={ultra10} alt="" />
              <p className="text-center">
                Delgadas Nocturna <br />
                con alas 10 piezas
              </p>
            </div>
            <div className="producto">
              <img src={in42} alt="" />
              <p className="text-center">
                Delgadas <br />
                con alas 42 piezas
              </p>
            </div>
          </div>
        </div>

        <div className="card-productos mb-5">
          <h2 className="text-center pb-3">Nocturnas</h2>
          <div className="productos producto-flex">
            <div className="producto">
              <img src={bn8} />
              <p className="text-center">
                Buenas Noches
                <br /> con alas 8 piezas
              </p>
            </div>
            <div className="producto">
              <img src={bn24} alt="" />
              <p className="text-center">
                Buenas Noches
                <br /> con alas 24 piezas
              </p>
            </div>
            <div className="producto">
              <img src={bn10} alt="" />
              <p className="text-center">
                Buenas Noches
                <br /> con alas 10 piezas
              </p>
            </div>
            <div className="producto">
              <img src={con8} alt="" />
              <p className="text-center">
                Confort Nocturna
                <br /> con alas 8 piezas
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default Asesoria;
