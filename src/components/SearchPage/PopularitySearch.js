import React from "react";

const popularitySearch = () => {
  return (
    <div className="FilterPanel__item input-range">
      <label>Популярность</label>
      <input type="range" min="0" max="5" step="1" value="5" />
    </div>
  );
};

export default popularitySearch;