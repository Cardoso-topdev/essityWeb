import React, { Fragment } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { Link } from "react-router-dom";
import "./infografias.css";
import { BsArrowLeftShort as Arrow } from "react-icons/bs";

//assets
import infografia from "../../assets/img/infografias/infografia4.png";
import info1 from "../../assets/img/infografias/page4/info1.png";
import info2 from "../../assets/img/infografias/page4/info2.png";

const Page4 = () => {
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
          Adultos, jovenes (18 - 40 años). Dueños de taquerías y fonditas.
        </p>
        <h2>CÓMO VENDERLOS</h2>
        <p className="border-rosa mb-5">
          Comunicar la higiene y practicidad de la toalla de cocina vs un trapo
          común.
        </p>
        <h2 className="mb-5">CÓMO Y DONDE EXHIBIRLOS </h2>

        <div className="grid-infografia">
          <div className="info">
            <img src={info1} alt="" />
            <p className="text-center">Lugar visible en tu negocio, junto a las serivlletas. </p>
          </div>
          <div className="info">
            <img src={info2} alt="" />
            <p className="text-center">
              Asegurar que siempre tengas el inventario suficiente.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Page4;
