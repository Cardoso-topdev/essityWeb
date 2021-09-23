import React, { Fragment } from "react";

import rindemas from "../../assets/img/regio/rinde/rindemas.png";
import rinde600 from "../../assets/img/regio/rinde/rinde600.png";
import rinde400 from "../../assets/img/regio/rinde/rinde400.png";

import aires300 from "../../assets/img/regio/aires/aires300.png";
import aires200 from "../../assets/img/regio/aires/aires200.png";
import aires500 from "../../assets/img/regio/aires/aires500.png";

import luxury from "../../assets/img/regio/luxury.png";

import regio1000 from "../../assets/img/regio/toallas/regio1000.png";
import regioav from "../../assets/img/regio/toallas/regioav.png";
import regiohogar from "../../assets/img/regio/toallas/regiohogar.png";

const RegioSeccion = () => {
  return (
    <Fragment>
      <div className="productos-regio">
        <div className="container">
          <h2>
            Regio® es una marca que a traves de los años es reconocida por los
            consumidores de México, lo que seguro contribuirá con el crecimiento
            de tu negocio.
          </h2>
          <p>
            Además, estudios recientes*, muestran que las tiendas de abarrotes
            es uno de los lugares donde generalmente se realiza la compra de
            papel sanitario por arriba del supermercado. También, la toalla de
            cocina hoy es un producto de alta demanda al estar presente en los
            hogares de los mexicanos ¿ya cuentas con ellas en tu negocio?
          </p>
        </div>
      </div>

      <div className="container">
        <h2>Papel Higienico</h2>

        <div className="card-productos border-azul mb-5">
          <h2 className="text-center pb-3">RINDE MAS +</h2>
          <div className="productos producto-flex">
            <div className="producto">
              <img src={rindemas} alt=""/>
              <p>
                Papel Higiénico <br />
                400 a 499 hojas
              </p>
            </div>
            <div className="producto">
              <img src={rinde600} alt=""/>
              <p>
                Regio Rinde Más
                <br />
                600 hojas
              </p>
            </div>
            <div className="producto">
              <img src={rinde400} alt=""/>
              <p>
                Regio Rinde Más
                <br />
                400 hojas
              </p>
            </div>
          </div>
        </div>

        <div className="card-productos border-azul mb-5">
          <h2 className="text-center pb-3">AIRES DE FRESCURA</h2>
          <div className="productos">
            <div className="producto">
              <img src={aires300} alt=""/>
              <p>
                Regio Aire de Frescura
                <br />
                300 hojas
              </p>
            </div>
            <div className="producto">
              <img src={aires200} alt=""/>
              <p>
                Regio Aire de Frescura
                <br />
                200 hojas
              </p>
            </div>
            <div className="producto">
              <img src={aires500} alt=""/>
              <p>
                Regio Aire de Frescura
                <br />
                500 hojas
              </p>
            </div>
          </div>
        </div>

        <div className="card-productos border-azul mb-5">
          <h2 className="text-center pb-3">LUXURY</h2>
          <div className="productos">
            <div className="producto">
              <img src={luxury} alt=""/>
              <p>
                Regio Luxury <br />
                205 hojas
              </p>
            </div>
          </div>
        </div>

        <h2>TOALLA DE COCINA</h2>

        <div className="card-productos border-azul mb-5">
          <div className="productos">
            <div className="producto">
              <img src={regio1000} alt=""/>
              <p>
                Regio 1000 usos
                <br />
                65 hojas
              </p>
            </div>
            <div className="producto">
              <img src={regiohogar} alt=""/>
              <p>
                Regio Hogar
                <br />
                70 hojas
              </p>
            </div>
            <div className="producto">
              <img src={regioav} alt=""/>
              <p>
                Regio Advanced
                <br />
                70 hojas
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RegioSeccion;
