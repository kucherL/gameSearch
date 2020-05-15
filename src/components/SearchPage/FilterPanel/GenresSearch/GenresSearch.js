import React from "react";

const genresSearch = (props) => {
  const genresList = props.genres.map((genre, index) => {
    return (
      <option
        key={index}
        onClick={props.clicked}
        value={genre[1]}
      >
        {genre[0]}
      </option>
    );
  });

  return (
    <div className="FilterPanel__item">
      <label htmlFor="genre-select">Жанр</label>
      <select name="genres" id="genre-select">
        {genresList}
      </select>
    </div>
  );
};

export default genresSearch;
