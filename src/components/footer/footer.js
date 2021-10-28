import React from "react";

//resources
import logoBlanco from "../../assets/img/logoBlanco.svg";

//icons
import { FaFacebookF as FbIcon } from "react-icons/fa";
import { AiOutlineTwitter as TwIcon } from "react-icons/ai";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <div className="container section-footer">
        <div className="texto-footer">
          <img src={logoBlanco} alt="" />
          <p className="mt-4">
            Empresa líder en el mundo en higiene y salud. Estamos comprometidos
            a mejorar el bienestar con nuestros productos y servicios.
          </p>
          <p className="copy">
          <button style={{color: 'rgb(97, 97, 97)'}} onClick={() => (window.location.href = "/politica-de-privacidad")}>Aviso de Privacidad</button>
          </p>
          <p className="copy">
            Copyright &copy; {year}. . All rights reserved.
          </p>
        </div>
        <div className="col-derecha" style={{float: 'right', display: 'flex'}}>
          <div className="nav-inferior">
            <button onClick={() => (window.location.href = "/")}>Inicio</button>
            <button onClick={() => (window.location.href = "/quienes-somos")}>
              ¿Quiénes somos?
            </button>
            <button onClick={() => (window.location.href = "/promociones")}>
              Promociones
            </button>
            <button
              onClick={() => (window.location.href = "/crece-mi-negocio")}
            >
              Crece mi negocio
            </button>
          </div>
          <div className="nav-inferior">
            <button onClick={() => (window.location.href = "/asesoria")}>
              Asesoría
            </button>
            <button onClick={() => (window.location.href = "donde-comprar")}>
              ¿Donde comprar?
            </button>
            <button
              onClick={() => (window.location.href = "/preguntas-frecuentes")}
            >
              FAQ
            </button>
          </div>
          <div className="social-networks">
            <h3>Síguenos</h3>
            <button>
              <FbIcon />
              <p>Facebook</p>
            </button>
            <button>
              <TwIcon />
              <p>Twitter</p>
            </button>
            <button>
              <TwIcon />
              <p>Instagram</p>
            </button>
          </div>
        </div>
      </div>

      <div className="text-center ocultar">
        <p className="copy">Copyright &copy; {year}. . All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
