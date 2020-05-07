import React from "react";

import "./UiItems.scss";

const submitButton = (props) => (
  <button className="SubmitButton" onClick={props.click}>{props.children}</button>
);

export default submitButton;