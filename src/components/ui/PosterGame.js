import React from "react";

import "./UiItems.scss";

const PosterGame = (props) => {
  return (
    <img
      src={props.cover}
      alt="poster"
      className="PosterGame"
    />
  );
};

export default PosterGame;
