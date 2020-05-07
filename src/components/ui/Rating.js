import React from "react";

import "./UiItems.scss";

const rating = (props) => (
  <div className="Rating">
    <p className="Rating__number">Rating: {props.children}</p>
  </div>
);

export default rating;
