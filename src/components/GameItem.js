import React from "react";

import PosterGame from "./ui/PosterGame";
import ToRememberButton from "./ui/ToRememberButton";
import AddUsersRating from "./ui/AddUsersRating";
import TitleGame from "./ui/TitleGame";
import DescriptionGame from "./ui/DescriptionGame";

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
        <TitleGame title={props.game} />
        <DescriptionGame description={props.description} />
      </div>
    </section>
  );
};

export default GameItem;
