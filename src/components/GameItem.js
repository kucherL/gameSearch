import React from "react";

import PosterGame from "./ui/PosterGame";
import Rating from "./ui/Rating";
import TitleGame from "./ui/TitleGame";
import DescriptionGame from "./ui/DescriptionGame";

const gameItem = () => {
  return (
    <section className="GameItem">
      <PosterGame />
      <TitleGame />
      <DescriptionGame />
    </section>
  );
};

export default gameItem;