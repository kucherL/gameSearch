import React from "react";

import "./AddUserRating.scss";
import StarButton from "../StarButton/StarButton";

const addUserRating = (props) => {
  const starButtonsList = () => {
    const arr = [1, 2, 3, 4, 5];
    return arr.map((value) => {
      return (
        <StarButton
          uid={props.uid}
          value={value}
          key={value}
          idGame={props.idGame}
          click={() => props.addUserRating(props.uid, value, props.idGame)}
        />
      );
    });
  };

  return <div className="AddUserRating">{starButtonsList()}</div>;
};

export default addUserRating;
