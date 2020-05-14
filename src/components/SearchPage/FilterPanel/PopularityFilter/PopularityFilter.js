import React from "react";

const popularityFilter = (props) => {
  return (
    <div className="FilterPanel__item input-field">
      <label>Популярность</label>
      <input
        type="range"
        min="0"
        max="5"
        step="1"
        value={props.popularity}
        onChange={props.popularityChanged}
      />
    </div>
  );
};

export default popularityFilter;
