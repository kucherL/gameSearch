import React from "react";
import { Link } from "react-router-dom";

import GameItem from "../GameItem";

const RandomGame = (props) => {
  return (
    <Link to="/singlePage">
      <section className="RandomGame">
        <GameItem
          game={props.titleRandomGame}
          summary={props.summaryGame}
          cover={props.coverRandomGame}
          key={props.idRandomGame}
        />
      </section>
    </Link>
  );
};

export default RandomGame;
