import React, { Fragment } from "react";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import img193 from "../assets/img/img193.png";

import promocion1 from "../assets/img/promociones/1.png";
import promocion2 from "../assets/img/promociones/2.png";
import promocion3 from "../assets/img/promociones/3.png";
import promocion4 from "../assets/img/promociones/4.png";
import promocion5 from "../assets/img/promociones/5.png";
import promocion6 from "../assets/img/promociones/6.png";
import promocion7 from "../assets/img/promociones/7.png";
import promocion8 from "../assets/img/promociones/8.png";
import promocion9 from "../assets/img/promociones/9.png";
import promocion10 from "../assets/img/promociones/10.png";
import promocion11 from "../assets/img/promociones/11.png";
//import promocion12 from "../assets/img/promociones/12.png";
import promocion13 from "../assets/img/promociones/13.png";
import promocion14 from "../assets/img/promociones/14.png";
import promocion15 from "../assets/img/promociones/15.png";
import promocion16 from "../assets/img/promociones/16.png";
import promocion17 from "../assets/img/promociones/17.png";

const Promociones = () => {
  return (
    <Fragment>
      <Navbar />

      <section className="section-promociones">
        <div className="container contenido-promociones">
          <div className="texto-promociones">
            <h1>Promociones</h1>
            <p>
              Confirma la disponibilidad<br></br> con el proveedor de tu
              preferencia
            </p>
          </div>
          <div className="img-promociones">
            <img src={img193} alt="" />
          </div>
        </div>
      </section>

      <div className="page-promociones">
        <div className="grid-promociones container">
          <div className="row">
            <div className="col-6 mb-3">
              <img src={promocion1} alt="" />
            </div>
            <div className="col-6 mb-3">
              <img src={promocion2} alt="" />
            </div>
            <div className="col-6 mb-3">
              <img src={promocion3} alt="" />
            </div>
            <div className="col-6 mb-3">
              <img src={promocion4} alt="" />
            </div>
            <div className="col-6 mb-3">
              <img src={promocion5} alt="" />
            </div>
            <div className="col-6 mb-3">
              <img src={promocion6} alt="" />
            </div>
            <div className="col-6 mb-3">
              <img src={promocion7} alt="" />
            </div>
            <div className="col-6 mb-3">
              <img src={promocion8} alt="" />
            </div>
            <div className="col-6 mb-3 mb-3">
              <img src={promocion9} alt="" />
            </div>
            <div className="col-6 mb-3 mb-3">
              <img src={promocion10} alt="" />
            </div>
            <div className="col-6 mb-3">
              <img src={promocion11} alt="" />
            </div>
            <div className="col-6 mb-3">
              <img src={promocion13} alt="" />
            </div>
            <div className="col-6 mb-3">
              <img src={promocion14} alt="" />
            </div>
            <div className="col-6 mb-3">
              <img src={promocion15} alt="" />
            </div>
            <div className="col-6 mb-3">
              <img src={promocion16} alt="" />
            </div>
            <div className="col-6 mb-3">
              <img src={promocion17} alt="" />
            </div>
          </div>
        </div>
      </div>
     <Footer />
    </Fragment>
  );
};

export default Promociones;
