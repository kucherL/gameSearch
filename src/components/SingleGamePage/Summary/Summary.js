import React from "react";

import sprite from "../../../assets/sprite.svg";
import "./Summary.scss";

const summary = (props) => (
  <section className="Summary">
    <svg>
      <use href={sprite + "#icon-book"} />
    </svg>
    <p className="Summary__title">Описание игры</p>
    <p>{props.summary}</p>
  </section>
);

export default summary;
