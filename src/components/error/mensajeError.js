import React from "react";

const Error = () => {
  return (
    <div
      style={{
        color: "white",
        backgroundColor: "rgb(239 72 63)",
        padding: "10px 100px",
        borderRadius: '15px',
        position: "absolute",
        top: "0",
        right: "0",
      }}
    >
      El campo telefono debe contener 10 digitos
    </div>
  );
};

export default Error;
