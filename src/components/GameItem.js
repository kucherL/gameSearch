import React from "react";

import PosterGame from "./ui/PosterGame";
import ToRememberButton from "./ui/ToRememberButton";
import AddUsersRating from "./AddUsersRating";
import TitleGame from "./ui/TitleGame";
import DescriptionGame from "./ui/DescriptionGame";

const gameItem = () => {

  return (
    <section className="GameItem">
      <PosterGame />
      <div>
        <ToRememberButton />
        <AddUsersRating />
        <TitleGame />
        <DescriptionGame />
      </div>
    </section>
  );
};

export default gameItem;
