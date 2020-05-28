import React from "react";
import "./Backdrop.scss";

const backdrop = (props) => (
  <div className="Backdrop" onClick={props.clicked}></div>
);

export default backdrop;
