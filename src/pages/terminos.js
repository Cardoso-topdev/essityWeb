import React, { Fragment } from "react";
import Navbar from "../components/navbar/navbar";

const Terminos = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="hero-cuestionario">
        <div className="container">
          <h1>
            Términos y condiciones
            <br />
            Cuestionario Regio y Saba
          </h1>
        </div>
      </div>

      <div
        className="container mt-5 mb-5"
        style={{ fontSize: "25px", textAlign: "justify" }}
      >
        <p className="mb-5" style={{ fontWeight: "700" }}>
          La participación de los usuarios en la promoción supone la aceptación
          tácita a los presentes términos y condiciones:
        </p>

        <p className="mb-5">
          <span style={{ fontWeight: "700" }}>Nombre del proyecto:</span>{" "}
          ¡RECIBE GRATIS PRODUCTO DE REGIO Y SABA!
        </p>

        <p className="mb-5">
          <span style={{ fontWeight: "700" }}>
            Organizadores de la promoción:
          </span>{" "}
          Essity{" "}
        </p>

        <p className="mb-5" style={{ fontWeight: "700" }}>
          Mecánica:{" "}
        </p>

        <p className="mb-5">
          1.Saba® y Regio® realizarán un sorteo el 1 de febrero 2022 con el
          total de participantes que contestaron la encuesta “¡RECIBE GRATIS
          PRODUCTO DE REGIO Y SABA!” publicada en{" "}
          <a
            href="https://www.creceminegocio.mx/"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            www.creceminegocio.mx/
          </a>{" "}
        </p>

        <p className="mb-5">
          2. El sorteo se realizará a través de la plataforma{" "}
          <a
            href="https://simpliers.com/"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            https://simpliers.com/
          </a>
        </p>

        <p className="mb-5">
          3. La participación se cerrará el 31 de enero 2022 a las 23:59 hora
          del centro de México.
        </p>

        <p className="mb-5">
          4. Se notificará a los ganadores a través del correo electrónico que
          se registró a más tardar 6 días hábiles después de la fecha de cierre
          de dinámica
        </p>

        <p className="mb-5">
          6. Si el ganador no contesta en un plazo mayor a 72 horas el premio se
          le entregara a los ganadores suplentes determinados por la plataforma
          simpliers.com
        </p>

        <p className="mb-5">
          7. Es necesario que se cumplan los pasos anteriormente mencionados de
          lo contrario no se podrá ser acreedor al premio ofrecido.
        </p>

        <p className="mb-5" style={{ fontWeight: "bold" }}>
          Premio:
        </p>
        <div className="text-center mb-5">
          <p className="mb-2">
            Ganador 1: 1 caja de Saba Buenas Noches de 14 paquetes con 8 toallas
          </p>
          <p className="mb-2">
            Ganador 2: 1 caja de Saba Buenas Noches de 14 paquetes con 8 toallas
          </p>
          <p className="mb-2">
            Ganador 3: 1 caja de Saba Buenas Noches de 14 paquetes con 8 toallas
          </p>
        </div>

        <p className="mb-5" style={{ fontWeight: "700" }}>
          Restricciones:
        </p>

        <p className="mb-5">
          El usuario deberá participar siguiendo todos los pasos correctamente
          de la dinámica.
        </p>
        <ul className="mb-5">
          <li>
            El premio no podrá ser canjeado por dinero en efectivo y no será
            transferible.
          </li>
          <li>
            Solo es válido en la mecánica: “¡RECIBE GRATIS PRODUCTO DE REGIO Y
            SABA!
          </li>
          <li>
            Las marcas organizadoras y el cliente se reservan el derecho de
            negar la entrega del premio a cualquier persona bajo la sospecha de
            manipulación de la información.
          </li>
        </ul>

        <p className="mb-5" style={{ fontWeight: "700" }}>
          El ganador
        </p>

        <ul className="mb-5">
          <li>
            Las marcas no se hacen responsables de que el ganador no cumpla en
            tiempo y forma con los datos solicitados.
          </li>
          <li>
            Serán 3 los ganadores y se determinarán mediante la plataforma{" "}
            <a
              href="https://simpliers.com/"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              https://smpliers.com/
            </a>
          </li>
        </ul>

        <p className="mb-5">
          <span style={{ fontWeight: "700" }}>Vigencia:</span> 15 de octubre
          2021 al 31 de enero 2022
        </p>

        <p className="mb-5">
          <span style={{ fontWeight: "700" }}>Cobertura de la promoción:</span>{" "}
          nivel nacional
        </p>

        <p className="mb-5">
          <span style={{ fontWeight: "700" }}>
            Medios de comunicación y fechas para dar a conocer los resultados y
            entrega de premios:
          </span>{" "}
          El ganador será contactado a más tardar el día 15 de febrero del 2022.
        </p>

        <p className="mb-5">
          <span style={{ fontWeight: "700" }}>
            Plazo para validar al ganador:
          </span>{" "}
          El ganador deberá de responder al correo electrónico de Essity a más
          tardar el día 11 de febrero 2022, en caso de que el ganador no
          responda después de esta fecha, se premiara al segundo participante
          elegido por la plataforma Simpliers.com ser acreedor al premio.
        </p>

        <a
          onClick={() => (window.location.href = "/politica-de-privacidad")}
          style={{ cursor: "pointer", fontWeight: '700' }}
        >
          AVISO DE PRIVACIDAD
        </a>
      </div>
    </Fragment>
  );
};

export default Terminos;
