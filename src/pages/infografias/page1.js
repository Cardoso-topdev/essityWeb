import React, { Fragment } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { Link } from "react-router-dom";
import "./infografias.css";
import { BsArrowLeftShort as Arrow } from "react-icons/bs";

//assets
import infografia from "../../assets/img/infografias/infografia1.png";
import info1 from "../../assets/img/infografias/page1/info1.jpg";
import info2 from "../../assets/img/infografias/page1/info2.jpg";
import info3 from "../../assets/img/infografias/page1/info3.jpg";
import info4 from "../../assets/img/infografias/page1/info4.jpg";

const Page1 = () => {
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
        <p className="border-rosa mb-5">Mujeres entre 12 y 45 años de edad</p>
        <h2>CÓMO VENDERLOS</h2>
        <p className="border-rosa mb-5">
          Sugerencia de venta por paquete para mantener la higiene del producto.
        </p>
        <h2 className="mb-5">CÓMO Y DONDE EXHIBIRLOS </h2>

        <div className="grid-infografia">
          <div className="info">
            <img src={info1} alt="" />
            <p className="text-center">Lugar visible en tu negocio. </p>
          </div>
          <div className="info">
            <img src={info2} alt="" />
            <p className="text-center">Exhibido en el área de higiene personal. . </p>
          </div>
          <div className="info">
            <img src={info3} alt="" />
            <p className="text-center">Resalta los productos que sean de promoción.  </p>
          </div>
          <div className="info">
            <img src={info4} alt="" />
            <p className="text-center">Precio siempre a la vista. </p>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Page1;
