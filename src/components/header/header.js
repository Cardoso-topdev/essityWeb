import React from "react";
import { Fragment } from "react";
import { BsArrowDownShort as Arrow } from "react-icons/bs";
import check from "../../assets/icons/check.svg";

//assets
import saba from "../../assets/img/logos/saba.png";
import regio from "../../assets/img/logos/regio.png";
import tena from "../../assets/img/logos/tena.png";

const Header = () => {
  return (
    <Fragment>
      <div className="hero">
        <div className="info-hero container">
          <h2>
            Te ayudamos a empoderar tu negocio a través de nuestros productos
          </h2>
          <p className="check">
            <img src={check} alt="" />
            <span className="pl-2">
              Incrementa el portafolio de tus productos
            </span>
          </p>
          <p className="check">
            <img src={check} alt="" />
            <span className="pl-2">Promociones para ti y para tu cliente</span>
          </p>
          <p className="check">
            <img src={check} alt="" />
            <span className="pl-2">Asesoría y crecimiento para tu negocio</span>
          </p>
          <p className="mt-2 texto-linea">Nuestra línea de productos</p>
          <div className="linea-productos mt-4">
            <img src={saba} alt="" />
            <img src={regio} alt="" />
            <img src={tena} alt="" />
          </div>
          <div className="d-flex justify-content-center" style={{width: '100%'}}>
            <div
              onClick={() => (window.location.href = "/asesoria#portafolio")}
              className="btn btn-primary btn-hero"
            >
              Ver portafolio
              <Arrow />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
