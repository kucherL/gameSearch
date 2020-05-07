import React from "react";
import { Link } from "react-router-dom";

import PosterGame from "../ui/PosterGame";
import TitleGame from "../ui/TitleGame";
import Rating from "../ui/Rating";
import DescriptionGame from "../ui/DescriptionGame";

const RandomGame = (props) => {
  return (
    <Link to="/singlePage" onClick={() => props.sendId(props.idRandomGame)}>
      <section className="RandomGame">
        <PosterGame cover={props.coverRandomGame} />
        <div className="RandomGame__container">
          <TitleGame title={props.titleRandomGame} />
          <Rating>{"70"}</Rating>
          <DescriptionGame description={props.summaryGame} />
        </div>
      </section>
    </Link>
  );
};

export default RandomGame;
