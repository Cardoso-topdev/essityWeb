import React, { Fragment } from "react";

//components
import Navbar from "../components/navbar/navbar";
import Header from "../components/header/header";
import About from "../components/section-about/about";
import Promotions from "../components/promotions/promotions";
import Footer from "../components/footer/footer";
import AsesoriaSection from "../components/section-asesoria/section-asesoria";

//assets
import portafolio1 from "../assets/img/Saba.jpg";
import portafolio2 from "../assets/img/Regio.jpg";
import portafolio3 from "../assets/img/Tena.jpg";

import camion from "../assets/video/camion.mp4";

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
        
        <div className="">
        <div className="container">
          <div className="row onediv">
            <div className="col-4 onediv mt-2">
               <div onClick={()=>window.location.href="/asesoria#saba"}>
                <img src={portafolio1} alt="" />
               </div> 
            </div>
            <div className="col-4 onediv mt-2">
              <div onClick={()=>window.location.href="/asesoria#regio"}>
                <img src={portafolio2} alt="" />
               </div>
            </div>
            <div className="col-4 onediv mt-2">
              <div onClick={()=>window.location.href="/asesoria#tena"}>
                <img src={portafolio3} alt="" />
               </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="video-comprar">
        <div className="texto-comprar">
          <h2 className="mb-3">¿Donde comprar?</h2>
          <p className="mb-5">Ya puedes encontrar<br/> distribuidor muy cerca de ti </p>
          <button onClick={()=>window.location.href="/donde-comprar"} className="btn btn-primary btn-sitio findsite">Encontrar sitio</button>
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
