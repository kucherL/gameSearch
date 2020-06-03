import React, { Component } from "react";

import "./Footer.scss";
import sprite from "../../assets/sprite.svg";

class Footer extends Component {
  render = () => {
    return (
      <footer className="Footer">
        <a href="#top" className="Footer__to-top">
          <button />
        </a>
        <ul className="Footer__contact-links">
          <li>
            <a
              href="https://github.com/kucherL/gameSearch"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg>
                <use href={sprite + "#icon-github-square"} />
              </svg>
            </a>
          </li>
          <li>
            <p className="Footer__copyright">
              2020 |{" "}
              <a
                href="https://kucherl.github.io/portfolio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Elizaveta Kucherova
              </a>
            </p>
          </li>
        </ul>
      </footer>
    );
  };
}

export default Footer;
