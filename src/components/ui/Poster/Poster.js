import React from "react";

import "./Poster.scss";

const Poster = (props) => {
  return (
    <img
      src={props.cover}
      alt="poster"
      className="Poster"
    />
  );
};

export default Poster;
