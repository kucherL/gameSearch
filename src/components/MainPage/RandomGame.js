import React from "react";

import PosterGame from "../ui/PosterGame";
import Rating from "../ui/Rating";
import TitleGame from "../ui/TitleGame";
import DescriptionGame from "../ui/DescriptionGame";

const RandomGame = (props) => {
  return (
    <section className="RandomGame">
      <PosterGame coverRandomGame={props.coverRandomGame} />
      <div className="RandomGame__container">
        <Rating />
        <TitleGame titleRandomGame={props.titleRandomGame} />
        <DescriptionGame />
      </div>
    </section>
  );
};

export default RandomGame;
