import React, { Fragment } from "react";

import Tena from "../../assets/icons/Tena.svg";

const TenaSeccion = () => {
  return (
    <Fragment>
      <div className="productos-tena">
        <div className="container">
          <img src={Tena} />
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
      </div>
    </Fragment>
  );
};

export default TenaSeccion;
