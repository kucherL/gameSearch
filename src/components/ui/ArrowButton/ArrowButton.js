import React from "react";

import "./ArrowButton.scss";

const arrowButton = (props) => {
  let className = "ArrowButton__item";
  if (props.menuOpen) {
    className += " menu-open";
  } else {
    className += " menu-closed";
  }

  return (
    <button className="ArrowButton" onClick={props.click}>
      {props.children}
      <span className={className} />
    </button>
  );
};

export default arrowButton;
