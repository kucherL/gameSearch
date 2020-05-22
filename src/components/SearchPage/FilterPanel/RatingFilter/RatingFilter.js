import React from "react";

const RatingFilter = (props) => (
  <div className="FilterPanel__item input-field">
    <label>Рейтинг</label>
    <input
      type="range"
      min="0"
      max="100"
      step="1"
      value={props.rating}
      onChange={props.ratingChanged}
      name="selectedRating"
    />
  </div>
);

export default RatingFilter;
