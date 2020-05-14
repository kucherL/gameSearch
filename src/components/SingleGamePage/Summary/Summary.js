import React from "react";

import "./Summary.scss";

const Summary = (props) => {
  return (
    <section className="Summary">
      <p className="Summary__title">Описание игры</p>
      <p>{props.summary}</p>
    </section>
  );
};

export default Summary;
