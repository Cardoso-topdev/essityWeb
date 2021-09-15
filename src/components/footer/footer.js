import React from "react";
import { Link } from "react-router-dom";

//resources
import logoBlanco from "../../assets/img/logoBlanco.svg";

//icons
import { FaFacebookF as FbIcon } from "react-icons/fa";
import {
  AiOutlineTwitter as TwIcon,
  AiOutlineInstagram as IgIcon,
} from "react-icons/ai";

const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();
    
  return (
    <footer className="footer">
      <div className="container section-footer">
        <div className="texto-footer">
          <img src={logoBlanco} />
          <p className="mt-4">
            Empresa líder en el mundo en higiene y salud. Estamos comprometidos
            a mejorar el bienestar con nuestros productos y servicios.
          </p>
          <p className="copy">Copyright &copy; {year}. . All rights reserved.</p>
        </div>
        <div className="nav-inferior">
          <Link to="/">Inicio</Link>
          <Link to="/quienes-somos">¿Quiénes somos?</Link>
          <Link to="/promociones">Promociones</Link>
          <Link to="/crece-mi-negocio">Crece mi negocio</Link>
        </div>
        <div className="nav-inferior">
          <Link to="/asesoria">Asesoría</Link>
          <Link to="donde-comprar">¿Donde comprar?</Link>
          <Link>FAQ</Link>
        </div>
        <div className="social-networks">
          <h3>Síguenos</h3>
          <Link>
            <FbIcon />
            <p>Facebook</p>
          </Link>
          <Link>
            <TwIcon />
            <p>Twitter</p>
          </Link>
          <Link>
            <TwIcon />
            <p>Instagram</p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
