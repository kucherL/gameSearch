import React, { useState } from "react";

import ArrowButton from "../ui/ArrowButton";

const PlatformSearch = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuOpenHandler = () => {
    setMenuOpen(!menuOpen);
  };

  const platformsList = <input type="checkbox" />;

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
