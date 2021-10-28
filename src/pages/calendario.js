import React, { Fragment } from "react";
import Navbar from "../components/navbar/navbar";

const Calendario = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="hero-cuestionario">
        <div className="container">
          <h1>Calendario</h1>
        </div>
      </div>

      <div
        className="container mt-5 mb-5"
        style={{ fontSize: "25px", textAlign: "justify" }}
      >
        <p className="mb-5" style={{ fontWeight: "700" }}>
          {" "}
          DINÁMICA
        </p>
        <p className="mb-5">
          Saba y Regio te invitan a mostrarnos cómo utilizas el calendario 2022
          en tu negocio, las mejores fotografías podrán ser acreedoras a
          increíbles premios.
        </p>
        <p className="mb-5">
          Envía una o más fotos de nuestro calendario 2022 en tu negocio al
          correo{" "}
          <a
            href="mailto:hola@creceminegocio.com"
            style={{ color: "blue", textDecoration: "underline" }}
            target="_blank"
          >
            hola@creceminegocio.com
          </a>
          , cada fotografía debe estar alienada a los siguientes criterios:
        </p>
        <ul className="mb-5">
          <li className="mb-3">
            Debe contener nuestro calendario 2022 (Regio y Saba)
          </li>
          <li className="mb-3">
            Debe mostrar algún espacio de tu negocio con el que se asegure que
            el material está colocado en tu tiendita
          </li>
          <li className="mb-3">
            En el cuerpo del correo mándanos tu teléfono para contactarte en
            caso de que resultes ganador
          </li>
        </ul>
        <p className="mb-5">
          Las candidaturas serán evaluadas por nuestros jueces que elegirán a
          los participantes ganadores. Entre más fotografías nos mandes, más
          oportunidades tienes de ganar.
        </p>
        <p className="mb-5" style={{ fontWeight: "700" }}>
          PREMIOS
        </p>
        <p className="mb-5">
          Saba y Regio regalará a cada uno de los participantes ganadores:
        </p>
        <ul className="mb-5">
          <li className="mb-3">
            Un corrugado de Saba Buenas Noches con alas de 14 paquetes con 8
            toallas cada uno
          </li>
          <li className="mb-3">
            Un corrugado de Saba Invisible con alas de 16 paquetes de 10 toallas
            cada uno
          </li>
          <li className="mb-3">
            Un colchón de Regio Rinde Más 600 hojas con 10 paquetes de 4 rollos
            cada uno
          </li>
        </ul>
        <p className="mb-5" style={{ fontWeight: "700" }}>
          VIGENCIA
        </p>
        <p className="mb-5">Tienes hasta el 31 de enero 2022 para participar</p>
        <p className="mb-5" style={{ fontWeight: "700" }}>
          RESULTADOS
        </p>
        <p className="mb-5">
          Los resultados de los ganadores se darán a conocer al término del
          concurso y se contactará a cada uno de ellos a través del correo
          electrónico que envió las fotografías.
        </p>
      </div>
    </Fragment>
  );
};

export default Calendario;
