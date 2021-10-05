import React from "react";

//resources
import video from "../../assets/img/video.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="section-about container">
        <img src={video} alt="" />
        <div className="info-about">
          <h2>¿Quiénes somos?</h2>
          <p className="p1">
            Essity es una compañía líder<br></br> en el mundo en higiene y
            salud.
          </p>
          <p className="p2">
            Estamos comprometidos a mejorar el bienestar con nuestros productos
            y servicios.
          </p>
          <div
            onClick={() => (window.location.href = "/quienes-somos")}
            className="btn btn-primary btn-about"
          >
            Ver más
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
