import React, { Fragment } from "react";

//components
import Navbar from "../components/navbar/navbar";
import Header from "../components/header/header";
import About from "../components/section-about/about";
import Promotions from "../components/promotions/promotions";
import Footer from "../components/footer/footer";
import AsesoriaSection from "../components/section-asesoria/section-asesoria";

import Portafolio from "../components/portafolio/portafolio";
import Render from "../components/render/reder";

const Index = () => {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <About />
      <Promotions />
      <AsesoriaSection />
      <Portafolio />
      <Render />
      <Footer />
    </Fragment>
  );
};

export default Index;
