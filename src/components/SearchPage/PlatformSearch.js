import React, { useState } from "react";

import ArrowButton from "../ui/ArrowButton";

const PlatformSearch = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuOpenHandler = () => {
    setMenuOpen(!menuOpen);
  };

  const platformsList = props.platforms.map((platform, index) => {
    return (
      <li key={index}>
        <input
          type="checkbox"
          key={index}
          onClick={props.clicked}
          value={platform[1]}
        />
        <p>{platform[0]}</p>
      </li>
    );
  });

  return (
    <ul className="FilterPanel__item">
      <div>
        <ArrowButton click={menuOpenHandler} menuOpen={menuOpen}>
          Платформа
        </ArrowButton>
      </div>
      {menuOpen ? (
        <div className="FilterPanel__item__dropdownMenu">{platformsList}</div>
      ) : null}
    </ul>
  );
};

export default PlatformSearch;
