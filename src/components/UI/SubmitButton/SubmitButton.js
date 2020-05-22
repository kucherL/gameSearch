import React from "react";

import "./SubmitButton.scss";

const SubmitButton = (props) => (
  <button className="SubmitButton" onClick={props.click}>
    {props.children}
  </button>
);

export default SubmitButton;
