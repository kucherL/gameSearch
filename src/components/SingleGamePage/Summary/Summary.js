import React from "react";

import sprite from "../../../assets/sprite.svg";
import "./Summary.scss";

const Summary = (props) => (
  <section className="Summary">
    <div className="Summary__title">
      <svg>
        <use href={sprite + "#icon-book"} />
      </svg>
      <h1>Описание игры</h1>
    </div>
    <p>{props.summary}</p>
  </section>
);

export default Summary;
