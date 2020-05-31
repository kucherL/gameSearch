import React from "react";

import "./FilterPanel.scss";
import SearchBar from "./SearchBar/SearchBar";
import GenresSearch from "./GenresSearch/GenresSearch";
import PlatformSearch from "./PlatformSearch/PlatformSearch";
import YearOfReleaseFilter from "./YearOfReleaseFilter/YearOfReleaseFilter";
import RatingFilter from "./RatingFilter/RatingFilter";
import PopularityFilter from "./PopularityFilter/PopularityFilter";
import SubmitButton from "../../UI/SubmitButton/SubmitButton";

const FilterPanel = (props) => {
  return (
    <form className="FilterPanel">
      <SearchBar searchFieldChanged={props.handleChange} />
      <GenresSearch genres={props.genres} clicked={props.handleChange} />
      <PlatformSearch
        platforms={props.platforms}
        clicked={props.handleChange}
      />
      {/* <YearOfReleaseFilter yearChanged={props.handleChange} /> */}
      <RatingFilter ratingChanged={props.handleChange} rating={props.rating} />
      <PopularityFilter
        popularityChanged={props.handleChange}
        popularity={props.popularity}
      />
      <SubmitButton click={props.filter}>Find</SubmitButton>
    </form>
  );
};

export default FilterPanel;
