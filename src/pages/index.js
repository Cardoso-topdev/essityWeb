import React, { Fragment } from "react";

//components
import Navbar from "../components/navbar/navbar";
import Header from "../components/header/header";
import About from "../components/section-about/about";
import Promotions from "../components/promotions/promotions";
import Footer from "../components/footer/footer";

const Index = () => {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <About />
      <Promotions />
      <Footer />
    </Fragment>
  );
};

export default Index;
