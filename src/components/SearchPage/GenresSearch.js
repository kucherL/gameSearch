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
        <a href="/" key={index} className="GenresSearch__link">
          {genre}
        </a>
      </li>
    );
  });

  return (
    <ul className="GenresSearch">
      <h2>Genres</h2>
      <ArrowButton click={menuOpenHandler} />
      {menuOpen ? <div>{genresList}</div> : null}
    </ul>
  );
};

export default GenresSearch;
