import React from "react";

const rating = (props) => (
  <div className="Rating">
    <p className="Rating__number">{props.children}</p>
  </div>
);

export default rating;
