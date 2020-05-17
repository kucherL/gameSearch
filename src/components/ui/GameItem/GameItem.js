import React from "react";

import "./GameItem.scss";
import PosterGame from "../Poster/Poster";
import ToRememberButton from "../ToRememberButton/ToRememberButton";
import AddUsersRating from "../AddUserRating/AddUserRating";
import Title from "../Title/Title";
import Description from "../Description/Description";

const gameItem = (props) => (
  <section className="GameItem__container">
    <PosterGame cover={props.cover} />
    <div className="GameItem__info">
      <ToRememberButton
        idGame={props.id}
        cover={props.cover}
        title={props.game}
        description={props.description}
        folders={props.folders}
        addGameToFolder={props.addGameToFolder}
        uid={props.uid}
      />
      <AddUsersRating
        idGame={props.id}
        uid={props.uid}
        addUserRating={props.addUserRating}
      />
      <Title title={props.game} />
      <Description
        genres={props.genres}
        platforms={props.platforms}
      />
    </div>
  </section>
);

export default gameItem;
