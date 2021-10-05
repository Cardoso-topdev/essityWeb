import React from "react";
import "../popup.css";
import close from '../../../assets/close.png'

const PopSaba = ({trigger, setTrigger, item }) => {
  return trigger ? (
    <div
      className="popup"
      onClick={e => {
        //setTrigger(false);
      }}
    >
      <div className="popup-inner popup-saba">
        <button
          type="button"
          className="close-btn"
          onClick={() => setTrigger(false)}
        >
          <img src={close} alt="" />
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

export default PopSaba;
