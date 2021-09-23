import React, { Fragment } from "react";

//components
import Navbar from "../components/navbar/navbar";
import Header from "../components/header/header";
import About from "../components/section-about/about";
import Promotions from "../components/promotions/promotions";
import Footer from "../components/footer/footer";
import AsesoriaSection from "../components/section-asesoria/section-asesoria";

//assets
import portafolio from "../assets/img/portafolio-ideal.png";
import camion from "../assets/video/camion.mp4";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <About />
      <Promotions />
      <AsesoriaSection />
      <div className="container portafolio-ideal mt-5">
        <h1 className="text-center">Portafolio ideal</h1>
        <p className="text-center mb-4">Lo útimo en nuestro portafolio</p>
        <img src={portafolio} alt="" />
      </div>

      <div className="video-comprar">
        <div className="texto-comprar">
          <h2 className="mb-3">¿Donde comprar?</h2>
          <p className="mb-5">Ya puedes encontrar<br/> distribuidor muy cerca de ti </p>
          <Link to="/" className="btn btn-primary btn-sitio">Encontrar sitio</Link>
        </div>
        <video src={camion} autoplay="autoplay" loop="loop" muted>
          Vídeo no es soportado...
        </video>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Index;
