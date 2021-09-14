import React, { Fragment } from "react";
import RegioSeccion from "./regio";
import SabaSeccion from "./saba";
import TenaSeccion from "./tena";

const Principal = () => {
  return (
    <Fragment>
      <SabaSeccion />
      <TenaSeccion />
      <RegioSeccion />
    </Fragment>
  );
};

export default Principal;
