import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import img228 from "../../assets/img/img228.png";
import img229 from "../../assets/img/img229.png";
import img230 from "../../assets/img/img230.png";
import img231 from "../../assets/img/img231.png";
import img232 from "../../assets/img/img232.png";

const AsesoriaSection = () => {
  return (
    <Fragment>
      <div className="asesoria-section mt-5">
        <div className="container">
          <div className="row row-1">
            <div className="col-7">
              <h2 className="mb-4">Crece mi negocio</h2>
              <img src={img228} alt="" />
              <h3 className="mt-3">Incontinencia para adulto (Tena)</h3>
              <p className="mb-3">
                Padecimiento más común de lo normal. Cada vez hay más adultos en
                el país. El portafolio que satisfase todas las necesidades de la
                población. Es una categoría con un margen de utilidad muy
                atractivo.
              </p>
              <img src={img229} alt="" />
              <h3 className="mt-3">Toalla de cocina</h3>
              <p className="mb-3">
                Cada vez más personas utilizan toalla de cocina en lugar de
                servilletas. El precio es accesible (Regio).{" "}
              </p>
            </div>
            <div className="col-5">
              <h2 className="mb-4">Asesoría</h2>
              <img src={img230} alt="" />
              <p className="mb-5 mt-3">
                SAP anuncia la creación de la mayor red empresarial del mundo en
                su evento "Sapphire Now 2021
              </p>
              <img src={img231} alt="" />
              <p className="mb-5 mt-3">
                Amazon, a punto de cerrar la comprar del estudio de cine MGM
              </p>
              <img src={img232} alt="" />
              <p className="mb-5 mt-3">
                Crece el riesgo de una nueva burbuja en el mercado inmobiliario
                mundial
              </p>
            </div>
          </div>

          <div className="botones-asesoria">
            <div className="row row-2">
              <div className="col-7">
                <Link
                  className="btn-explorar f-azul"
                  onClick={() => (window.location.href = "/crece-mi-negocio")}
                >
                  Explorar más
                </Link>
              </div>

              <div className="col-5">
                <Link
                  className="btn-explorar f-rosa"
                  onClick={() => (window.location.href = "/asesoria")}
                >
                  Explorar más
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AsesoriaSection;
