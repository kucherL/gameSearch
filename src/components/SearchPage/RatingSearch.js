import React from "react";

const ratingSearch = () => {
  return (
    <div className="FilterPanel__item input-range">
      <label>Рейтинг</label>
      <input type="range" min="0" max="100" step="1" value="50" />
    </div>
  );
};

export default ratingSearch;