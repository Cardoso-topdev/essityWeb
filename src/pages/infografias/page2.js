import React, { Fragment } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { Link } from "react-router-dom";
import "./infografias.css";
import { BsArrowLeftShort as Arrow } from "react-icons/bs";

//assets
import infografia from "../../assets/img/infografias/infografia2.png";
import info1 from "../../assets/img/infografias/page2/info1.jpg";
import info2 from "../../assets/img/infografias/page2/info2.jpg";
import info3 from "../../assets/img/infografias/page2/info3.jpg";

const Page2 = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="hero-infografias">
        <div className="container">
          <Link
            to="/crece-mi-negocio"
            className="d-flex align-items-center regresar mb-2"
          >
            <Arrow />
            <p className="pl-1">Regresar</p>
          </Link>
        </div>
        <img src={infografia} alt="" />
      </div>
      <div className="container contenido-infografia mt-3">
        <h2>A QUIEN VENDERLOS</h2>
        <p className="border-rosa mb-5">
          Hombres y mujeres de 25 años en adelante.
          <br />
          Profesional de la salud.
          <br />
          Familiares.
        </p>
        <h2>CÓMO VENDERLOS</h2>
        <p className="border-rosa mb-5">
          Comunica que cuentas con la categoría. <br />
          Si tu negocio está dentro de un hospital, asegura contar con la
          categoría. <br />
          Conoce las características de productos en la sección porfatolio ideal
          (link).
        </p>
        <h2 className="mb-5">CÓMO Y DONDE EXHIBIRLOS </h2>

        <div className="grid-infografia">
          <div className="info">
            <img src={info1} alt="" />
            <p className="text-center">
              Lugar visible en tu negocio para que tu cliente sepa que manejas
              la categoría.
            </p>
          </div>
          <div className="info">
            <img src={info2} alt="" />
            <p className="text-center">
              También muestra la variedad de productos que manejas.
            </p>
          </div>
          <div className="info">
            <img src={info3} alt="" />
            <p className="text-center">
              Exhibir el producto en el área de higiene personal.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Page2;
