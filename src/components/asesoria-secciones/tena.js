import React, { Fragment, useState } from "react";
import Tena from "../../assets/icons/Tena.svg";
import tenaAnatomico from "../../json/asesoria/tena/anatomico.json";
import tenaInterior from "../../json/asesoria/tena/interior.json";
import tenaCubre from "../../json/asesoria/tena/cubre.json";
import PopTena from "../popups/tena/popupTena";

const TenaSeccion = () => {
  const [trigger, setTrigger] = useState(false);
  const [objeto, setObjeto] = useState({});
  return (
    <Fragment>
      <div className="productos-tena" id="tena">
        <div className="container">
          <img src={Tena} alt="" />
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
        <h2 className="mt-5 mb-5">ROPA INTERIOR DESECHABLE</h2>

        <div className="card-productos border-azul mb-5">
          <div className="productos productos-flex">
            {tenaInterior.map((item) => (
              <Fragment>
                <div
                  className="producto"
                  key={item.id}
                  onClick={() => {
                    setTrigger(true);
                    setObjeto(item);
                  }}
                >
                  <img src={item.image} alt="" />
                  <div className="textos-card">
                  <p className="text-center">{item.info}</p>
                  <p className="text-center">{item.content}</p>
                  </div>
                </div>
                <PopTena
                  trigger={trigger}
                  setTrigger={setTrigger}
                  item={objeto}
                />
              </Fragment>
            ))}
          </div>
        </div>

        <div className="grid-cards mb-5">
          <div className="card-productos border-azul">
            <h2 className="text-center">PROTECTOR ANATÓMICO</h2>
            <div className="productos productos-flex">
              {tenaAnatomico.map((item) => (
                <Fragment>
                  <div
                    className="producto"
                    key={item.id}
                    onClick={() => {
                      setTrigger(true);
                      setObjeto(item);
                    }}
                  >
                    <img src={item.image} alt="" />
                    <div className="textos-card">
                  <p className="text-center">{item.info}</p>
                  <p className="text-center">{item.content}</p>
                  </div>
                  </div>
                  <PopTena
                    trigger={trigger}
                    setTrigger={setTrigger}
                    item={objeto}
                  />
                </Fragment>
              ))}
            </div>
          </div>

          <div className="card-productos border-azul">
            <h2 className="text-center">CUBRE CAMA</h2>
            <div className="productos productos-flex">
              {tenaCubre.map((item) => (
                <Fragment>
                  <div
                    className="producto"
                    key={item.id}
                    onClick={() => {
                      setTrigger(true);
                      setObjeto(item);
                    }}
                  >
                    <img src={item.image} alt="" />
                    <div className="textos-card">
                  <p className="text-center">{item.info}</p>
                  <p className="text-center">{item.content}</p>
                  </div>
                  </div>
                  <PopTena
                    trigger={trigger}
                    setTrigger={setTrigger}
                    item={objeto}
                  />
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TenaSeccion;
