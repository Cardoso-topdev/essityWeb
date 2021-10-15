import React from "react";

//assets
import portafolio1 from "../../assets/img/Saba.jpg";
import portafolio2 from "../../assets/img/Regio.jpg";
import portafolio3 from "../../assets/img/Tena.jpg";

const Portafolio = () => {
  return (
    <div className="container portafolio-ideal mt-5">
      <h2 className="text-center text-rosa">Portafolio ideal</h2>
      <h4 className="text-center mb-4">Lo útimo en nuestro portafolio</h4>

      <div className="row onediv">
        <div className="col-4 onediv mt-2 cursor-pointer">
          <div onClick={() => (window.location.href = "/asesoria#saba")}>
            <img src={portafolio1} alt="" />
          </div>
        </div>
        <div className="col-4 onediv mt-2 cursor-pointer">
          <div onClick={() => (window.location.href = "/asesoria#regio")}>
            <img src={portafolio2} alt="" />
          </div>
        </div>
        <div className="col-4 onediv mt-2 cursor-pointer">
          <div onClick={() => (window.location.href = "/asesoria#tena")}>
            <img src={portafolio3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portafolio;
