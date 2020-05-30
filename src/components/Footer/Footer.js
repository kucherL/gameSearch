import React, { Component } from "react";

import "./Footer.scss";
import sprite from "../../assets/sprite.svg";
import portfolioIcon from "../../assets/portfolio-icon.svg";

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
          {/* <li>
            <a href="/">
              <img
                src={portfolioIcon}
                alt="portfolio-link"
              />
            </a>
          </li> */}
          <li>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <svg>
                <use href={sprite + "#icon-linkedin-square"} />
              </svg>
            </a>
          </li>
        </ul>
        <p className="Footer__copyright">2020 | Елизавета Кучерова</p>
      </footer>
    );
  };
}

export default Footer;
