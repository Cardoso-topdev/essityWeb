import React, { Fragment } from "react";
import { Link } from "react-router-dom";

//components
import Navbar from "../components/navbar/navbar";
import Header from "../components/header/header";
import About from "../components/section-about/about";
import Promotions from "../components/promotions/promotions";
import Footer from "../components/footer/footer";
import AsesoriaSection from "../components/section-asesoria/section-asesoria";

const Index = () => {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <About />
      <Promotions />
      <AsesoriaSection />
      {/* 
      <div className="portafolio-ideal">
        <div className="container">
          <h2 className="text-center">Portafolio ideal</h2>
          <p className="text-center">Portafolio ideal</p>
        </div>
      </div>
      */}
    </Fragment>
  );
};

export default Index;
