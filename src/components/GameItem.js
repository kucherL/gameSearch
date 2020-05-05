import React from "react";
import { Link } from "react-router-dom";

import PosterGame from "./ui/PosterGame";
import ToRememberButton from "./ui/ToRememberButton";
import AddUsersRating from "./ui/AddUsersRating";
import TitleGame from "./ui/TitleGame";
import DescriptionGame from "./ui/DescriptionGame";

const gameItem = (props) => {
  return (
    <Link to="/singlePage">
      <section className="GameItem">
        <PosterGame coverRandomGame={props.cover} />
        <div>
          <ToRememberButton />
          <AddUsersRating />
          <TitleGame titleRandomGame={props.game} />
          <DescriptionGame summaryGame={props.summary} />
        </div>
      </section>
    </Link>
  );
};

export default gameItem;
