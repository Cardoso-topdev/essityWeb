import React, { Fragment } from "react";

import Tena from "../../assets/icons/Tena.svg";

import comg10s from "../../assets/img/tena/productos/comg10s.png";
import comm10s from "../../assets/img/tena/productos/comm10s.png";
import maxig from "../../assets/img/tena/productos/maxig.png";
import maxim from "../../assets/img/tena/productos/maxim.png";

import slipg from "../../assets/img/tena/protector/slipg.png";
import slipm from "../../assets/img/tena/protector/slipm.png";

import protector from "../../assets/img/tena/protector.png";

const TenaSeccion = () => {
  return (
    <Fragment>
      <div className="productos-tena">
        <div className="container">
          <img src={Tena} alt=""/>
          <h2>
            Marca numero 1 en el autoservicio y lider en México y en el mundo
          </h2>
          <p>
            La pérdida involuntaria de orina, ya sea en pequeños goteos o por no
            poder alcanzar el baño, se asocia frecuentemente con los adultos
            mayores, pero se puede presentar a cualquier edad, 1 de de cada 4
            mujeres y 1 de cada 8 hombres la padecen.Por esta razón es
            importante contar con productos para la incontenencia en tu negocio,
            estamos seguros que incrementará las ganancias en tu negocio.
          </p>
        </div>
      </div>

      <div className="container">
        <h2>ROPA INTERIOR DESECHABLE</h2>

        <div className="card-productos border-azul mb-5">
          <div className="productos productos-flex">
            <div className="producto">
              <img src={maxig} alt=""/>
              <p>
                Pants Maxi Protect
                <br />
                Grande 10 piezas
              </p>
            </div>
            <div className="producto">
              <img src={maxim} alt=""/>
              <p>
                Pants Maxi Protect
                <br />
                Mediano 10 piezas
              </p>
            </div>
            <div className="producto">
              <img src={comm10s} alt=""/>
              <p>
                Comfort Ropa Interior
                <br />
                Mediano 10 piezas
              </p>
            </div>
            <div className="producto">
              <img src={comg10s} alt=""/>
              <p>
                Comfort Ropa Interior
                <br />
                Grande 10 piezas
              </p>
            </div>
          </div>
        </div>

        <div className="grid-cards mb-5">
          <div className="card-productos border-azul">
            <h2 className="text-center">PROTECTOR ANATÓMICO</h2>
            <div className="productos productos-flex">
              <div className="producto">
                <img src={slipg} alt=""/>
                <p>
                  Slip Maxi Protect
                  <br />
                  Grande 10 piezas
                </p>
              </div>
              <div className="producto">
                <img src={slipm} alt=""/>
                <p>
                  Slip Maxi Protect
                  <br />
                  Mediano 10 piezas
                </p>
              </div>
            </div>
          </div>

          <div className="card-productos border-azul">
            <h2 className="text-center">CUBRE CAMA</h2>
            <div className="productos productos-flex">
              <div className="producto">
                <img src={protector} alt=""/>
                <p>
                  Predoblado
                  <br />
                  10 piezas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TenaSeccion;
