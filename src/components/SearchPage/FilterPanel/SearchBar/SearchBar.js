import React from "react";

const searchBar = (props) => (
  <div className="FilterPanel__item">
    <input type="text" id="search-bar" onChange={props.searchFieldChanged} name="searchField" />
  </div>
);

export default searchBar;
