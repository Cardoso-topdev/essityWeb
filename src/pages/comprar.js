import React from "react";
import { Fragment, useState, useEffect } from "react";

//components
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

import estados from "../json/estados.json";

import { MdLocationOn as LocationIcon } from "react-icons/md";

const Comprar = () => {
  const [text, setText] = useState();
  const [suggestions, setSuggestions] = useState([]);
  const [display, setDisplay] = useState(false);

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
    if (suggestions.length > 0) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  }, [suggestions]);

  const handleClick = (text) => {
    setText(text);
    setSuggestions([]);
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
                  suggestions.map((suggestion, i) => (
                    <div
                      key={i}
                      className="suggestion"
                      onClick={() => handleClick(suggestion.name)}
                    >
                      {suggestion.name}
                    </div>
                  ))}
              </div>
            ) : null}
          </div>
        </div>
      </header>
      <div>
          <h1>Hola Mundo</h1>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Comprar;
