import React from "react";

import ArrowButton from "../ui/ArrowButton";

const pagination = (props) => (
  <div className="Pagination">
    <ArrowButton click={props.changePageBackwards} />
    {props.children}
    <ArrowButton click={props.changePageForward} />
  </div>
);

export default pagination;