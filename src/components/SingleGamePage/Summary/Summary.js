import React from "react";

import "./Summary.scss";

const summary = (props) => (
  <section className="Summary">
    <p className="Summary__title">Описание игры</p>
    <p>{props.summary}</p>
  </section>
);

export default summary;
