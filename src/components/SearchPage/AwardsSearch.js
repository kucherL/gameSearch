import React, { useState } from "react";

import ArrowButton from "../ui/ArrowButton";

const AwardsSearch = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuOpenHandler = () => {
    setMenuOpen(!menuOpen);
  };

  const awardsList = <input type="checkbox" />;

  return (
    <ul className="FilterPanel__item">
      <div>
        <ArrowButton click={menuOpenHandler} menuOpen={menuOpen}>
          Награды
        </ArrowButton>
      </div>
      {menuOpen ? (
        <div className="FilterPanel__item__dropdownMenu">{awardsList}</div>
      ) : null}
    </ul>
  );
};

export default AwardsSearch;
