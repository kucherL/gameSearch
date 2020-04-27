import React from "react";

import ArrowButton from "./ui/ArrowButton";

const footer = () => (
  <footer className="Footer">
    <ArrowButton />
    <ul className="Footer__container-middle">
      <li className="Footer__container-middle__item">
        <a href="/">@</a>
      </li>
      <li className="Footer__container-middle__item">
        <a href="/">@</a>
      </li>
      <li className="Footer__container-middle__item">
        <a href="/">@</a>
      </li>
    </ul>
    <div className="Footer__container-right">
      <p className="Footer__container-right__item-text">Копирайт</p>
    </div>
  </footer>
);

export default footer;
