import React from "react";

import "./UiItems.scss";

const arrowButton = (props) => {
  let className = "ArrowButton";
  if (props.menuOpen) {
    className += " menu-open";
  } else {
    className += " menu-closed";
  }

  return (
    <button className="ArrowButton__container" onClick={props.click}>
      {props.children}
      <span className={className} />
    </button>
  );
};

export default arrowButton;
