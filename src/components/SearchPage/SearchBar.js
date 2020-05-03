import React from "react";

const searchBar = (props) => {
  return (
    <div className="FilterPanel__item">
      <input type="text" className="FilterPanel__item__search-bar" onChange={props.searchFieldChanged} />
    </div>
  );
};

export default searchBar;
