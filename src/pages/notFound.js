import React from "react";
import {Link} from 'react-router-dom';
import imgConstruccion from "../assets/img/construccion.png";
import logo from '../assets/img/Logo.svg'

const NotFound = () => {
  return (
    <div className="container not-found">
      <div className="primera-columna">
          <img src={logo} alt=""/>
        <h1>404</h1>
        <p>Sitio en construcción</p>
        <Link to="/" className="btn btn-primary p-3">Regresar al inicio</Link>
      </div>
      <div className="segunda-columna">
      <img src={imgConstruccion} alt=""/>
      </div>
    </div>
  );
};

export default NotFound;
