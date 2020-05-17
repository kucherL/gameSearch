import React from "react";

const genresSearch = (props) => {
  const genresList = props.genres.map((genre, index) => {
    return (
      <option
        key={index}
        value={genre.id}
      >
        {genre.name}
      </option>
    );
  });

  return (
    <div className="FilterPanel__item">
      <label htmlFor="selectedGenres">Жанр</label>
      <select name="selectedGenres" id="genre-select" onClick={props.clicked}>
        {genresList}
      </select>
    </div>
  );
};

export default genresSearch;
