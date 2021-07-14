import React, { Fragment } from "react";
import preguntas from "../json/preguntas.json";

//componentes
import Navbar from "../components/navbar/navbar";
import Formulario from "../components/formulario/formulario";

//icons
import ArrowDown from '../assets/icons/arrow-down.svg';

const Frecuentes = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="section-frecuentes">
        <div className="encabezado-frecuentes container">
          <h2>Preguntas más frecuentes</h2>
          <p>Conoce más acerca de nuestra plataforma</p>
        </div>
      </div>

      <div className="container mt-5">
        {preguntas.map((pregunta) => (
          <div className="card-pregunta">
            <img src={ArrowDown}/>
            <h2>{pregunta.title}</h2>
            <p>{pregunta.content}</p>
          </div>
        ))}
      </div>


      <div className="container texto-dudas">
        <h2>Todavía tienes dudas?</h2>
        <p>Si no puede encontrar una respuesta a su pregunta en nuestras preguntas frecuentes, siempre puede contactarnos. ¡Te responderemos a la brevedad!</p>
      </div>

      <Formulario />
    </Fragment>
  );
};

export default Frecuentes;
