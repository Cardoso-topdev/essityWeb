import React from "react";

import "../popup.css";

const PopRegio = ({ trigger, setTrigger, item }) => {
  return trigger ? (
    <div
      className="popup"
      onClick={(e) => {
        //setTrigger(false);
      }}
    >
      <div className="popup-inner popup-regio">
        <button
          type="button"
          className="close-btn"
          onClick={() => setTrigger(false)}
        >
          Close
        </button>
        <div className="pop-info">
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <p className="legend">{item.legend}</p>
        </div>
        <div className="img-pop">
          <img src={item.image} />
        </div>
      </div>
    </div>
  ) : null;
};

export default PopRegio;
