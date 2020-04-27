import React from "react";

const PosterGame = (props) => {
  return (
    <img
      src={props.coverRandomGame}
      alt="poster"
      className="PosterGame"
    />
  );
};

export default PosterGame;
