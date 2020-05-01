import React from "react";

const PlatformSearch = (props) => {
  return (
    <div className="FilterPanel__item input-field">
      <label>Платформа</label>
      <input
        type="text"
        className="FilterPanel__item--input-text"
        onChange={props.platformChanged}
      />
    </div>
  );
};

export default PlatformSearch;
