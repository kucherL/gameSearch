import React from "react";

import "./Poster.scss";

const poster = (props) => (
  <img src={props.cover} alt="poster" className="Poster" />
);

export default poster;
