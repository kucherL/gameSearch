import React from "react";

import sprite from "../../../assets/sprite.svg";
import "./StarButton.scss";

const StarButton = (props) => (
  <button className="StarButton" onClick={props.click}>
    <svg>
      <use href={sprite + "#icon-star-o"} />
    </svg>
  </button>
);

export default StarButton;
