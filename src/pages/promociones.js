import React, { Fragment } from "react";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import img193 from '../assets/img/img193.png';

const Promociones = () => {
  return (
    <Fragment>
      <Navbar />

      <div className="hero-promociones">
        <div className="container">
          <div className="texto-promociones">
            <h1>Promociones</h1>
            <p>Confirma la disponibilidad<br></br> con el proveedor de tu preferencia</p>
          </div>
          <div>
              <img src={img193}/>
          </div>
        </div>
      </div>

      <div className="container">
        <h2>SABA</h2>
      </div>

      <Footer />
    </Fragment>
  );
};

export default Promociones;
