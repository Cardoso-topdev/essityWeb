import React from "react";
import { Link } from "react-router-dom";

//resources
import logoBlanco from "../../assets/img/logoBlanco.svg";

//icons
import { FaFacebookF as FbIcon } from "react-icons/fa";
import {
  AiOutlineTwitter as TwIcon
} from "react-icons/ai";

const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();
    
  return (
    <footer className="footer">
      <div className="container section-footer">
        <div className="texto-footer">
          <img src={logoBlanco} alt=""/>
          <p className="mt-4">
            Empresa líder en el mundo en higiene y salud. Estamos comprometidos
            a mejorar el bienestar con nuestros productos y servicios.
          </p>
          <p className="copy">Copyright &copy; {year}. . All rights reserved.</p>
        </div>
        <div className="nav-inferior">
          <a href="/">Inicio</a>
          <a href="/quienes-somos">¿Quiénes somos?</a>
          <a href="/promociones">Promociones</a>
          <a href="/crece-mi-negocio">Crece mi negocio</a>
        </div>
        <div className="nav-inferior">
          <a href="/asesoria">Asesoría</a>
          <a href="donde-comprar">¿Donde comprar?</a>
          <a href="/preguntas-frecuentes">FAQ</a>
        </div>
        <div className="social-networks">
          <h3>Síguenos</h3>
          <a>
            <FbIcon />
            <p>Facebook</p>
          </a>
          <a>
            <TwIcon />
            <p>Twitter</p>
          </a>
          <a>
            <TwIcon />
            <p>Instagram</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
