import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { BsArrowDownShort as Arrow } from "react-icons/bs";
import check from "../../assets/icons/check.svg";

const Header = () => {
  return (
    <Fragment>
      <div className="hero">
        <div className="info-hero container">
          <h2>
            Te ayudamos a empoderar tu negocio a traves de nuestros productos
          </h2>
          <p>
            <img src={check} alt="" />
            <span className="pl-2">
              Incrementa el portafolio de tus productos
            </span>
          </p>
          <p>
            <img src={check} alt="" />
            <span className="pl-2">Promociones para ti y para tu cliente</span>
          </p>
          <p>
            <img src={check} alt="" />
            <span className="pl-2">Asesoría y crecimiento para tu negocio</span>
          </p>
          <div className="d-flex justify-content-center">
            <Link className="btn btn-primary btn-hero">
              Ver portafolio
              <Arrow />
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
