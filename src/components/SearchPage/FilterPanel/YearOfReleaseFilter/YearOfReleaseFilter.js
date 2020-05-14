import React from "react";

const YearOfReleaseFilter = (props) => {
  return (
    <div className="FilterPanel__item">
      <label htmlFor="year-input">Год</label>
      <input
        type="text"
        onChange={props.yearChanged}
        id="year-input"
      />
    </div>
  );
};

export default YearOfReleaseFilter;
