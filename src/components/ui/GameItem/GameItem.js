import React from "react";

import "./GameItem.scss";
import PosterGame from "../Poster/Poster";
import ToRememberButton from "../ToRememberButton/ToRememberButton";
import AddUsersRating from "../AddUserRating/AddUserRating";
import Title from "../Title/Title";
import Description from "../Description/Description";

const GameItem = (props) => {
  return (
    <section className="GameItem__container">
      <PosterGame cover={props.cover} />
      <div className="GameItem__info">
        <ToRememberButton
          idGame={props.id}
          cover={props.cover}
          title={props.game}
          description={props.description}
        />
        <AddUsersRating idGame={props.id} />
        <Title title={props.game} />
        <Description description={props.description} />
      </div>
    </section>
  );
};

export default GameItem;
