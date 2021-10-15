import React from "react";

import camion from "../../assets/video/camion.mp4";

const Render = () => {
  return (
    <div className="video-comprar">
      <div className="texto-comprar">
        <h2 className="mb-3">¿Donde comprar?</h2>
        <p className="mb-5">
          Ya puedes encontrar
          <br /> distribuidor muy cerca de ti{" "}
        </p>
        <button
          onClick={() => (window.location.href = "/donde-comprar")}
          className="btn btn-primary btn-sitio findsite"
        >
          Encontrar sitio
        </button>
      </div>
      <video src={camion} autoplay="autoplay" loop="loop" muted>
        Vídeo no es soportado...
      </video>
    </div>
  );
};

export default Render;
