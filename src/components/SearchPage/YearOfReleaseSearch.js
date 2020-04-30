import React, { useState } from "react";

import ArrowButton from "../ui/ArrowButton";

const YearOfReleaseSearch = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuOpenHandler = () => {
    setMenuOpen(!menuOpen);
  };

  const releasesList = <input type="checkbox" />;

  return (
    <ul className="FilterPanel__item">
      <div>
        <ArrowButton click={menuOpenHandler} menuOpen={menuOpen}>
          Год выхода
        </ArrowButton>
      </div>
      {menuOpen ? (
        <div className="FilterPanel__item__dropdownMenu">{releasesList}</div>
      ) : null}
    </ul>
  );
};

export default YearOfReleaseSearch;
