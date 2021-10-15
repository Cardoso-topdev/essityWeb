import React from "react";

import img194 from "../../assets/img/promociones/9.png";
import promocion2 from "../../assets/img/promociones/7.png";

import { BsArrowRightShort as Arrow } from "react-icons/bs";

const Promotions = () => {
  return (
    <section className="promotions">
      <div className="container section-promotions">
        <div className="mejores-promociones">
          <h2>Promociones</h2>
          <p className="first-text">
            Descubre las mejores promociones para tu negocio
          </p>
          <p className="last-text">
            Cada mes podrás encontrar descuentos y promociones...
          </p>
        </div>
        <div className="row">
          <div className="col-6">
            <img src={promocion2} alt="" />
          </div>
          <div className="col-6">
            <img src={img194} alt="" />
          </div>
        </div>
          <div className="descubrir-mas" onClick={() => (window.location.href = "/promociones")}>
            <p className="text-center">Descubrir más promociones</p>
            <Arrow />
          </div>
      </div>
    </section>
  );
};

export default Promotions;
