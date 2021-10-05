import React, { Fragment, useState } from "react";
import PopSaba from "../popups/saba/popupSaba";

import sabaNocturnas from "../../json/asesoria/saba/nocturnas.json";

import in10 from "../../assets/img/saba/delgadas/in10.jpg";
import in42 from "../../assets/img/saba/delgadas/in42.jpg";
import ultra10 from "../../assets/img/saba/delgadas/ultra10.jpg";

import intima10 from "../../assets/img/saba/regulares/intima10.jpg";
import intimasa from "../../assets/img/saba/regulares/intimasa.jpg";
import confortalas from "../../assets/img/saba/regulares/confortalas.jpg";
import confort from "../../assets/img/saba/regulares/confort.jpg";

import largo28 from "../../assets/img/saba/diarios/largo28.jpg";
import largo50 from "../../assets/img/saba/diarios/largo50.jpg";
import regular14 from "../../assets/img/saba/diarios/regular14.jpg";
import regular16 from "../../assets/img/saba/diarios/regular16.jpg";
import regular28 from "../../assets/img/saba/diarios/regular28.jpg";

const SabaSeccion = () => {
  const [trigger, setTrigger] = useState(false);
  const [objeto, setObjeto] = useState({});

  return (
    <Fragment>
      <div className="productos-saba mt-5">
        <div className="container d-flex">
          <div className="div">

          <div className="ml-5 pl-5 mb-5 saba-titulo">
            <h3 id="saba">Productos Saba</h3>
            <p>Expande y fortalece tu portafolio</p>

            </div>
            <p className="fs-30 fw-500 lh-42">
              De cada 10 pesos de toalla femenina y pantiprotectores que se
              consumen en el país, 6 son de Saba®
            </p>
            <p>
              Saba se posiciona como líder en ambas categorías lo que ayudará a
              incrementar las ventas de tu negocio; además, las toallas
              sanitarias están consideradas como un derecho a la salud de las
              mujeres como productos de primera necesidad por lo que siempre
              buscamos innovar en nuestros productos. ¡Tus clientes siempre te
              los pedirán!
            </p>
          </div>
          <div>
            <img alt="imagen" />
          </div>
        </div>
      </div>

      <div className="container">
        <h2 className="mt-5 mb-5">Toallas Femeninas</h2>
        <div className="card-productos mb-5">
          <h2 className="text-center pb-3">Nocturnas</h2>
          <div className="productos producto-flex">
            {sabaNocturnas.map((item) => (
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
                  <p className="text-center">{item.info}</p>
                </div>
                <PopSaba
                  trigger={trigger}
                  setTrigger={setTrigger}
                  item={objeto}
                />
              </Fragment>
            ))}
          </div>
        </div>

        <div className="card-productos mb-5">
          <h2 className="text-center pb-3">Delgadas</h2>
          <div className="productos">
            <div className="producto">
              <img src={in10} alt="" />
              <p className="text-center">
                Delgadas <br />
                con alas 10 piezas
              </p>
            </div>
            <div className="producto">
              <img src={ultra10} alt="" />
              <p className="text-center">
                Delgadas Nocturna <br />
                con alas 10 piezas
              </p>
            </div>
            <div className="producto">
              <img src={in42} alt="" />
              <p className="text-center">
                Delgadas <br />
                con alas 42 piezas
              </p>
            </div>
          </div>
        </div>

        <div className="card-productos mb-5">
          <h2 className="text-center pb-3">Regulares</h2>
          <div className="productos producto-flex">
            <div className="producto">
              <img src={intima10} alt="" />
              <p className="text-center">
                Intima Clip <br />
                con alas 10 piezas
              </p>
            </div>
            <div className="producto">
              <img src={intimasa} alt="" />
              <p className="text-center">
                Intima sin alas
                <br />
                10 piezas
              </p>
            </div>
            <div className="producto">
              <img src={confortalas} alt="" />
              <p className="text-center">
                Confort Regular
                <br />
                con alas 10 piezas
              </p>
            </div>
            <div className="producto">
              <img src={confort} alt="" />
              <p className="text-center">
                Confort Regular
                <br />
                sin alas 10 piezas
              </p>
            </div>
          </div>
        </div>

        <h2 className="mt-5 mb-5">PROTECTORES DIARIOS</h2>

        <div className="card-productos mb-5">
          <div className="productos producto-flex p-5">
            <div className="producto">
              <img src={largo28} alt="" />
              <p className="text-center">
                Delicate Largos
                <br />
                28 piezas
              </p>
            </div>
            <div className="producto">
              <img src={regular28} alt="" />
              <p className="text-center">
                Delicate Regular
                <br />
                28 piezas
              </p>
            </div>
            <div className="producto">
              <img src={regular14} alt="" />
              <p className="text-center">
                Confort Regular <br />
                14 piezas
              </p>
            </div>
            <div className="producto">
              <img src={regular16} alt="" />
              <p className="text-center">
                Delicate Regular <br />
                16 piezas
              </p>
            </div>
            <div className="producto">
              <img src={largo50} alt="" />
              <p className="text-center">
                Delicate Largo <br />
                50 piezas
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SabaSeccion;
