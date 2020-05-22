import React from "react";

import "./Poster.scss";
import sprite from "../../../assets/sprite.svg";

const Poster = (props) => (
  <div className="Poster">
    {!props.cover ? (
      <svg alt="poster" className="Poster-svg">
        <use href={sprite + "#icon-spaceinvaders"} />
      </svg>
    ) : (
      <img src={props.cover} alt="poster" className="Poster-img" />
    )}
  </div>
);

export default Poster;
