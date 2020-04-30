import React, { useState } from "react";

import ArrowButton from "../ui/ArrowButton";

const GenresSearch = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuOpenHandler = () => {
    setMenuOpen(!menuOpen);
  };

  const genresList = props.genres.map((genre, index) => {
    return (
      <li key={index}>
        <input type="checkbox" key={index}>
          {genre}
        </input>
      </li>
    );
  });

  return (
    <ul className="FilterPanel__item">
      <div>
        <ArrowButton click={menuOpenHandler} menuOpen={menuOpen}>
          Жанр
        </ArrowButton>
      </div>
      {menuOpen ? (
        <div className="FilterPanel__item__dropdownMenu">{genresList}</div>
      ) : null}
    </ul>
  );
};

export default GenresSearch;