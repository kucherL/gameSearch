import React from "react";

const searchBar = (props) => (
  <div className="FilterPanel__item">
    <input type="text" id="search-bar" onChange={props.searchFieldChanged} />
  </div>
);

export default searchBar;
