import React from "react";

import SearchBar from "./SearchBar";
import GenresSearch from "./GenresSearch";
import PlatformSearch from "./PlatformSearch";
import YearOfReleaseSearch from "./YearOfReleaseSearch";
import RatingSearch from "./RatingSearch";
import PopularitySearch from "./PopularitySearch";

const filterPanel = (props) => {
  return (
    <nav className="FilterPanel">
      <SearchBar searchFieldChanged={props.searchFieldChanged}/>
      <GenresSearch genres={props.genres} clicked={props.checkGenre} />
      <PlatformSearch platforms={props.platforms} clicked={props.checkPlatform} />
      <YearOfReleaseSearch yearChanged={props.yearChanged} />
      <RatingSearch ratingChanged={props.ratingChanged} rating={props.rating} />
      <PopularitySearch
        popularityChanged={props.popularityChanged}
        popularity={props.popularity}
      />
      <button onClick={props.filter}>Найти</button>
    </nav>
  );
};

export default filterPanel;
