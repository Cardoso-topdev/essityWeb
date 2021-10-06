import React from "react";
import { Fragment, useState, useEffect } from "react";
import axios from "axios";

//components
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

//import estados from "../json/estados.json";

import { MdLocationOn as LocationIcon } from "react-icons/md";
import mapaBg from "../assets/img/mapabg.png";
import Mapa from "../components/mapasvg/mapa";

const Comprar = () => {
  const [estados, setEstados] = useState([]);
  const [text, setText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [display, setDisplay] = useState(false);
  const [urlMap, setUrlMap] = useState(mapaBg);
  //const [condicionProvedores, setCondicionProvedores] = useState(false);
  const [id, setId] = useState("");

  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = estados.filter((estado) => {
        const regex = new RegExp(`${text}`, "gi");
        return estado.name.match(regex);
      });
    }
    setSuggestions(matches);
    setText(text);
  };

  useEffect(() => {
    const consultarEstados = async () => {
      const { data } = await axios.get(
        "http://admin.creceminegocio.mx/api/allstates"
      );
      setEstados(data.providers);
    };

    consultarEstados();

    if (suggestions.length > 0) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  }, [suggestions]);

  useEffect(() => {
    const consultarEstado = async () => {
      const { data } = await axios.get(
        `http://admin.creceminegocio.mx/api/providersbystate/${id}`
      );
      console.log(data);
    };

    consultarEstado();
  }, [id]);

  const handleClick = (text, url, id) => {
    setText(text);
    setSuggestions([]);
    setUrlMap(url);
    //setCondicionProvedores(true);
    setId(id);
  };
  return (
    <Fragment>
      <Navbar />
      <header className="hero-comprar">
        <div className="container">
          <h1>
            Adquiere el mejor precio de
            <br /> nuestros productos para tu negocio en estos sitios
          </h1>
          <span className="d-flex align-items-center location pt-4">
            <LocationIcon />
            <p className="m-0 pl-1">Encuentra proveedores</p>
          </span>
          <p className="selecciona">
            Selecciona tu estado para mostrarte proveedores en tu zona
          </p>

          <div className="col-lg-4 mt-5 pl-0 pr-0 input-ciudad">
            <label>Filtrar por ciudad</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => onChangeHandler(e.target.value)}
              value={text}
            />
            {display ? (
              <div className="suggestions-container">
                {suggestions &&
                  suggestions.map((suggestion, i) => {
                    const { name, url_map, id } = suggestion;
                    return (
                      <div
                        key={i}
                        className="suggestion"
                        onClick={() => handleClick(name, url_map, id)}
                      >
                        {suggestion.name}
                      </div>
                    );
                  })}
              </div>
            ) : null}
          </div>
        </div>

        <div className="mapa container">
          <Mapa text={text} setText={setText}/>
        </div>
      </header>

      <div className="marcas-proveedores container">
        {text ? <p>Estos son los proveedores en {text}</p> : null}
        <div></div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Comprar;
