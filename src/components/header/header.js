import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Fragment>
      <div className="hero">
        <div className="info-hero container">
          <h2>
            Te ayudamos a empoderar tu negocio a traves de nuestros productos
          </h2>
          <p>Incrementa el portafolio de tus productos</p>
          <p>Promociones para ti y para tu cliente</p>
          <p>Asesoría y crecimiento para tu negocio</p>
          <Link className="btn btn-primary btn-hero">Ver portafolio</Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
