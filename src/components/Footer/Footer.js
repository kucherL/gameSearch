import React from "react";

import "./Footer.scss";
import ArrowButton from "../ui/ArrowButton/ArrowButton";

const footer = () => (
  <footer className="Footer">
    <ArrowButton />
    <ul className="Footer__contact-links">
      <li>
        <a href="/">@</a>
      </li>
      <li>
        <a href="/">@</a>
      </li>
      <li>
        <a href="/">@</a>
      </li>
    </ul>
    <p className="Footer__copyright">
      2020 Елизавета Кучерова
    </p>
  </footer>
);

export default footer;
