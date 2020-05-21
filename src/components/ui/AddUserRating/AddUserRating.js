import React from "react";

import "./AddUserRating.scss";

const AddUserRating = (props) => {
  const clickHandler = (e) => {
    // if (e.target.classList.contains("CheckedStar")) {
    //   e.target.classList.remove("CheckedStar");
    // } else {
    //   e.target.classList.add("CheckedStar");
    // }
    props.addUserRating(props.uid, e.target.value, props.idGame);
  };

  return (
    <div className="star-rating">
      <button
        type="button"
        className="five-star"
        value="5"
        onClick={clickHandler}
      >
        <span className="transparent">★★★★</span>★
      </button>
      <button
        type="button"
        className="four-star"
        value="4"
        onClick={clickHandler}
      >
        <span className="transparent">★★★</span>★
      </button>
      <button
        type="button"
        className="three-star"
        value="3"
        onClick={clickHandler}
      >
        <span className="transparent">★★</span>★
      </button>
      <button
        type="button"
        className="two-star"
        value="2"
        onClick={clickHandler}
      >
        <span className="transparent">★</span>★
      </button>
      <button
        type="button"
        className="one-star"
        value="1"
        onClick={clickHandler}
      >
        ★
      </button>
    </div>
  );
};

export default AddUserRating;
