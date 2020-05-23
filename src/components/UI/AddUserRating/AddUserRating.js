import React from "react";

import "./AddUserRating.scss";

const AddUserRating = (props) => {
  const clickHandler = (e) => {
    props.addUserRating(props.uid, e.target.value, props.idGame);
    props.fetchUserRating(props.uid);
  };

  return (
    <div className="star-rating">
      <button
        type="button"
        className={`five-star ${
          +props.ratedGames[props.idGame] > 4 ? "CheckedStar" : ""
        }`}
        value="5"
        hint="Brilliantly!"
        onClick={clickHandler}
        disabled={props.uid ? false : true}
      >
        <span className="transparent">★★★★</span>★
      </button>
      <button
        type="button"
        className={`four-star ${
          +props.ratedGames[props.idGame] > 3 ? "CheckedStar" : ""
        }`}
        value="4"
        hint="Good"
        onClick={clickHandler}
        disabled={props.uid ? false : true}
      >
        <span className="transparent">★★★</span>★
      </button>
      <button
        type="button"
        className={`three-star ${
          +props.ratedGames[props.idGame] > 2 ? "CheckedStar" : ""
        }`}
        value="3"
        hint="Fair"
        onClick={clickHandler}
        disabled={props.uid ? false : true}
      >
        <span className="transparent">★★</span>★
      </button>
      <button
        type="button"
        className={`two-star ${
          +props.ratedGames[props.idGame] > 1 ? "CheckedStar" : ""
        }`}
        value="2"
        hint="So-so"
        onClick={clickHandler}
        disabled={props.uid ? false : true}
      >
        <span className="transparent">★</span>★
      </button>
      <button
        type="button"
        className={`one-star ${
          +props.ratedGames[props.idGame] > 0 ? "CheckedStar" : ""
        }`}
        value="1"
        hint="Not worth it"
        onClick={clickHandler}
        disabled={props.uid ? false : true}
      >
        ★
      </button>
    </div>
  );
};

export default AddUserRating;
