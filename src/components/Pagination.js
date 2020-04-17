import React from "react";

import ArrowButton from "./ui/ArrowButton";

const pagination = (props) => (
  <div className="Pagination">
    <ArrowButton />
    {props.children}
    <ArrowButton />
  </div>
);

export default pagination;