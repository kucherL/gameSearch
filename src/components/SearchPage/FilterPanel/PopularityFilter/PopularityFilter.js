import React from "react";

const PopularityFilter = (props) => (
  <div className="FilterPanel__item input-field">
    <label>Popularity</label>
    <input
      type="range"
      min="0"
      max="5"
      step="1"
      value={props.popularity}
      onChange={props.popularityChanged}
      name="selectedPopularity"
      hint={props.popularity}
    />
  </div>
);

export default PopularityFilter;
