import React from "react";

const YearOfReleaseSearch = (props) => {
  return (
    <div className="FilterPanel__item input-field">
      <label>Год выхода</label>
      <input
        type="text"
        className="FilterPanel__item--input-text"
        onChange={props.yearChanged}
      />
    </div>
  );
};

export default YearOfReleaseSearch;
