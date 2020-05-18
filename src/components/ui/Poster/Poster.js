import React from "react";

import "./Poster.scss";
import sprite from "../../../assets/sprite.svg";

const poster = (props) => {
  let cover = "";
  if (!props.cover) {
    cover = (
      <svg alt="poster" className="Poster-svg">
        <use href={sprite + "#icon-spaceinvaders"} />
      </svg>
    );
  } else {
    cover = <img src={props.cover} alt="poster" className="Poster-img" />;
  }

  return <div className="Poster">{cover}</div>;
};

export default poster;
