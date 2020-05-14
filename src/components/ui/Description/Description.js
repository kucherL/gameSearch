import React from "react";

import "./Description.scss";

const description = (props) => (
  <div className="Description">
    <p>{props.description}</p>
  </div>
);

export default description;
