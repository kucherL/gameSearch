import React from "react";

import sprite from "../../../assets/sprite.svg";
import "./StarButton.scss";

const StarButton = (props) => (
  <>
    {!props.uid ? (
      <button disabled className="StarButton">
        <svg>
          <use href={sprite + "#icon-star-o"} />
        </svg>
      </button>
    ) : (
      <button className="StarButton" onClick={props.click}>
        <svg>
          <use href={sprite + "#icon-star-o"} />
        </svg>
      </button>
    )}
  </>
);

export default StarButton;
