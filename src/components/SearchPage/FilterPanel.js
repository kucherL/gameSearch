import React from "react";

import SearchBar from "./SearchBar";
import GenresSearch from "./GenresSearch";
import PlatformSearch from "./PlatformSearch";
import YearOfReleaseSearch from "./YearOfReleaseSearch";
import RatingSearch from "./RatingSearch";
import PopularitySearch from "./PopularitySearch";
import AwardsSearch from "./AwardsSearch";

const filterPanel = (props) => {
  return (
    <nav className="FilterPanel">
      <SearchBar />
      <GenresSearch genres={props.genres} />
      <PlatformSearch />
      <YearOfReleaseSearch />
      <RatingSearch />
      <PopularitySearch />
      <AwardsSearch />
    </nav>
  );
};

export default filterPanel;
