import React, { Fragment, useState } from "react";
import PopRegio from "../popups/regio/popupRegio";

import regioRinde from "../../json/asesoria/regio/rinde.json";
import regioAires from "../../json/asesoria/regio/aires.json";
import regioLuxury from "../../json/asesoria/regio/luxury.json";
import regioToallas from '../../json/asesoria/regio/toallas.json'

const RegioSeccion = () => {
  const [trigger, setTrigger] = useState(false);
  const [objeto, setObjeto] = useState({});
  return (
    <Fragment>
      <div className="productos-regio" id="regio">
        <div className="container">
          <div className="p-regio">
            <p id="regio">Productos Regio</p>
            <p>Expande y fortalece tu portafolio</p>
          </div>
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
        <h2 className="mt-5 mb-5">PAPEL HIGIÉNICO</h2>

        <div className="card-productos border-azul mb-5">
          <h2 className="text-center pb-3">RINDE MAS +</h2>
          <div className="productos producto-flex">
            {regioRinde.map((item) => (
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
                <PopRegio
                  trigger={trigger}
                  setTrigger={setTrigger}
                  item={objeto}
                />
              </Fragment>
            ))}
          </div>
        </div>

        <div className="card-productos border-azul mb-5">
          <h2 className="text-center pb-3">AIRES DE FRESCURA</h2>
          <div className="productos">
            {regioAires.map((item) => (
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
                <PopRegio
                  trigger={trigger}
                  setTrigger={setTrigger}
                  item={objeto}
                />
              </Fragment>
            ))}
          </div>
        </div>

        <div className="card-productos border-azul mb-5">
          <h2 className="text-center pb-3">LUXURY</h2>
          <div className="productos">
            {regioLuxury.map((item) => (
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
                <PopRegio
                  trigger={trigger}
                  setTrigger={setTrigger}
                  item={objeto}
                />
              </Fragment>
            ))}
          </div>
        </div>

        <h2 className="mt-5 mb-5">TOALLA DE COCINA</h2>

        <div className="card-productos border-azul mb-5">
          <div className="productos">
          {regioToallas.map((item) => (
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
                <PopRegio
                  trigger={trigger}
                  setTrigger={setTrigger}
                  item={objeto}
                />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RegioSeccion;
