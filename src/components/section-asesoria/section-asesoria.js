import React, { Fragment } from "react";

import img228 from "../../assets/img/img228.png";
import img229 from "../../assets/img/img229.png";
import img230 from "../../assets/img/img230.png";
import img231 from "../../assets/img/img231.png";
import img232 from "../../assets/img/img232.png";
import img189 from "../../assets/img/img189.jpg";
import img190 from "../../assets/img/img190.jpg";
import img191 from "../../assets/img/img191.jpg";

const AsesoriaSection = () => {
  return (
    <Fragment>
      <div className="asesoria-section mt-5">
        <div className="container">
          <div className="row row-1">
            <div className="col-7">
              <h2 className="mb-4">Crece mi negocio</h2>
              <img src={img228} alt=""/>
              <h3 className="mt-3 text-rosa">Incontinencia para adulto (Tena)</h3>
              <p  className="mb-3">
                Padecimiento más común de lo normal. Cada vez hay más adultos en
                el país. El portafolio que satisfase todas las necesidades de la
                población. Es una categoría con un margen de utilidad muy
                atractivo.
              </p>
              <img src={img229} alt=""/>
              <h3  className="mt-3 text-rosa">Toalla de cocina</h3>
              <p  className="mb-3">
                Cada vez más personas utilizan toalla de cocina en lugar de
                servilletas. El precio es accesible (Regio).{" "}
              </p>
            </div>
            <div className="col-5">
              <h2 className="mb-4">&nbsp;</h2>
              <img src={img189} alt=""/>
              <p className="mb-5 mt-3">
                <h3  className="mt-3">Toalla de cocina</h3>
                SAP anuncia la creación de la mayor red empresarial del mundo en
                su evento "Sapphire Now 2021
              </p>
              <img src={img191} alt=""/>
              <h3  className="mt-3">Papel de Baño</h3>
              <p className="mb-5 mt-3">
                Amazon, a punto de cerrar la comprar del estudio de cine MGM
              </p>
            </div>
          </div>

          <div className="botones-asesoria">
            <div className="row row-2">
              <div className="col-7">
                <button className="btn-explorar f-azul" onClick={()=>window.location.href="/crece-mi-negocio"}>
                  Explorar más
                </button>
              </div>

              <div className="col-5">
                <button className="btn-explorar f-rosa" onClick={()=>window.location.href="/asesoria"}>
                  Explorar más
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AsesoriaSection;
