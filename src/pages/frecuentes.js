import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import preguntas from "../json/preguntas.json";

//componentes
import Navbar from "../components/navbar/navbar";
import Formulario from "../components/formulario/formulario";
import Footer from "../components/footer/footer";

//icons
import ArrowDown from "../assets/icons/arrow-down.svg";

const Frecuentes = () => {
  const handleClick = (e) => {};

  return (
    <Fragment>
      <Navbar />
      <div className="section-frecuentes">
        <div className="encabezado-frecuentes container">
          <h2>Preguntas más frecuentes</h2>
          <p>Conoce más acerca de nuestra plataforma</p>
        </div>
      </div>

      <div class="accordion container mt-5" id="accordionExample">
        {preguntas.map((pregunta) => (
          <div class="accordion-item">
            <h2>{pregunta.title}</h2>
            <Link
              class="accordion-button collapsed"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${pregunta.id}`}
              aria-expanded="false"
              aria-controls={`collapse${pregunta.id}`}
              onClick={handleClick}
            >
              <img src={ArrowDown} alt=""/>
            </Link>
            <div
              id={`collapse${pregunta.id}`}
              class="accordion-collapse collapse"
              aria-labelledby="headingOne"
            >
              <div class="accordion-body">{pregunta.content}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="container texto-dudas">
        <h2>Todavía tienes dudas?</h2>
        <p>
          Si no puede encontrar una respuesta a su pregunta en nuestras
          preguntas frecuentes, siempre puede contactarnos. ¡Te responderemos a
          la brevedad!
        </p>
      </div>

      <Formulario />

      <Footer />
    </Fragment>
  );
};

export default Frecuentes;
