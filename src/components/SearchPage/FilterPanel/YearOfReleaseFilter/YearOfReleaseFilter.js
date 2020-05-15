import React from "react";

const yearOfReleaseFilter = (props) => (
  <div className="FilterPanel__item">
    <label htmlFor="year-input">Год</label>
    <input type="text" onChange={props.yearChanged} id="year-input" />
  </div>
);

export default yearOfReleaseFilter;
