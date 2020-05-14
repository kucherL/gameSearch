import React from "react";

import "./FilterPanel.scss";
import SearchBar from "./SearchBar/SearchBar";
import GenresSearch from "./GenresSearch/GenresSearch";
import PlatformSearch from "./PlatformSearch/PlatformSearch";
import YearOfReleaseFilter from "./YearOfReleaseFilter/YearOfReleaseFilter";
import RatingFilter from "./RatingFilter/RatingFilter";
import PopularityFilter from "./PopularityFilter/PopularityFilter";
import SubmitButton from "../ui/SubmitButton";

const filterPanel = (props) => {
  return (
    <nav className="FilterPanel">
      <SearchBar searchFieldChanged={props.searchFieldChanged} />
      <GenresSearch genres={props.genres} clicked={props.checkGenre} />
      <PlatformSearch
        platforms={props.platforms}
        clicked={props.checkPlatform}
      />
      <YearOfReleaseFilter yearChanged={props.yearChanged} />
      <RatingFilter ratingChanged={props.ratingChanged} rating={props.rating} />
      <PopularityFilter
        popularityChanged={props.popularityChanged}
        popularity={props.popularity}
      />
      <SubmitButton click={props.filter}>Найти</SubmitButton>
    </nav>
  );
};

export default filterPanel;
