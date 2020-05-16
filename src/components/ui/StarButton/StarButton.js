import React from "react";

import "./StarButton.scss";

const StarButton = (props) => (
  <button className="StarButton" onClick={props.click} />
);

export default StarButton;
