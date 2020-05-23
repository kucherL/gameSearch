import React from "react";

const GenresSearch = (props) => {
  const genresList = Object.values(props.genres).map((genre) => {
    return (
      <option key={genre.id} value={genre.id}>
        {genre.name}
      </option>
    );
  });

  return (
    <div className="FilterPanel__item">
      <label htmlFor="selectedGenres">Жанр</label>
      <select
        name="selectedGenres"
        id="genre-select"
        onClick={props.clicked}
        defaultValue={"DEFAULT"}
      >
        <option value="DEFAULT" disabled hidden>
          --Choose a genre--
        </option>
        {genresList}
      </select>
    </div>
  );
};

export default GenresSearch;
