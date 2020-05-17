import React, { Component } from "react";

import "./Footer.scss";
import sprite from "../../assets/sprite.svg";
import ArrowButton from "../ui/ArrowButton/ArrowButton";

class Footer extends Component {
  render = () => {
    return (
      <footer className="Footer">
        <ArrowButton />
        <ul className="Footer__contact-links">
          <li>
            <a href="/">
              <svg>
                <use href={sprite + "#icon-github-square"} />
              </svg>
            </a>
          </li>
          <li>
            <a href="/">
              <img
                src={require("../../assets/portfolio-icon.svg")}
                alt="portfolio-link"
              />
            </a>
          </li>
          <li>
            <a href="/">
              <svg>
                <use href={sprite + "#icon-linkedin-square"} />
              </svg>
            </a>
          </li>
        </ul>
        <p className="Footer__copyright">2020 Елизавета Кучерова</p>
      </footer>
    );
  };
}

export default Footer;
