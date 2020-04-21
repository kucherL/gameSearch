import React from "react";

import PosterGame from "./ui/PosterGame";
import Rating from "./ui/Rating";
import TitleGame from "./ui/TitleGame";
import DescriptionGame from "./ui/DescriptionGame";

const randomGame = () => {
  return (
    <section className="RandomGame">
      <PosterGame />
      <div className="RandomGame__container">
        <Rating />
        <TitleGame />
        <DescriptionGame />
      </div>
    </section>
  );
};

export default randomGame;