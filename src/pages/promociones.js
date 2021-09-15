import React, { Fragment } from "react";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import img193 from "../assets/img/img193.png";

import img196 from "../assets/img/img196.png";
import img194 from "../assets/img/img194.png";
import promocion1 from "../assets/img/promocion1.png";
import promocion2 from "../assets/img/promocion2.png";

const Promociones = () => {
  return (
    <Fragment>
      <Navbar />

      <div className="hero-promociones">
        <div className="container">
          <div className="texto-promociones">
            <h1>Promociones</h1>
            <p>
              Confirma la disponibilidad<br></br> con el proveedor de tu
              preferencia
            </p>
          </div>
          <div>
            <img src={img193} />
          </div>
        </div>
      </div>

      <div className="page-promociones">
        <div className="grid-promociones container">
          <h2>SABA</h2>

          <div className="row">
            <div className="col-6 mb-3">
              <img src={promocion2} />
            </div>
            <div className="col-6 mb-3">
              <img src={img196} />
            </div>
            <div className="col-6">
              <img src={promocion1} />
            </div>
            <div className="col-6">
              <img src={img194} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Promociones;
