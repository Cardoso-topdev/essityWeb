import React from "react";
import close from '../../assets/close.png'
import "./popup.css";

const PopPreguntas = ({ trigger, setTrigger }) => {
  return trigger ? (
    <div
      className="popup"
      onClick={(e) => {
        //setTrigger(false);
      }}
    >
      <div className="popup-inner popup-preguntas">
        <button
          type="button"
          className="close-btn"
          onClick={() => setTrigger(false)}
        >
          <img src={close} alt="" />
        </button>
        <button className="btn-pop" onClick={()=>window.location.href = '/'}>Inicio</button>
        </div>
      </div>
  ) : null;
};

export default PopPreguntas;