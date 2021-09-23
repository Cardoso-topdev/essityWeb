import React from "react";
import { Link } from "react-router-dom";

//resources
import video from "../../assets/img/video.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="section-about container">
        <div>
          <img src={video} alt=""/>
        </div>
        <div className="info-about">
          <h2>¿Quiénes somos?</h2>
          <p className="p1">Essity es una compañía líder<br></br> en el mundo en higiene y salud.</p>
          <p className="p2">
            Estamos comprometidos a mejorar el bienestar con nuestros productos
            y servicios.
          </p>
          <Link to="/quienes-somos" className="btn btn-primary btn-about">
            Ver más
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
