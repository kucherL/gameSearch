import React from "react";

import PosterGame from "./ui/PosterGame";
import ToRememberButton from "./ui/ToRememberButton";
import AddUsersRating from "./ui/AddUsersRating";
import TitleGame from "./ui/TitleGame";
import DescriptionGame from "./ui/DescriptionGame";

const gameItem = (props) => {
  return (
    <section className="GameItem">
      <PosterGame coverRandomGame={props.cover} />
      <div>
        <ToRememberButton />
        <AddUsersRating />
        <TitleGame titleRandomGame={props.game} />
        <DescriptionGame summaryGame={props.summary} />
      </div>
    </section>
  );
};

export default gameItem;
