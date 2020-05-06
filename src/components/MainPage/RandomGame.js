import React from "react";
import { Link } from "react-router-dom";

import GameItem from "../GameItem";

const RandomGame = (props) => {
  return (
    <Link to="/singlePage" onClick={() => props.sendId(props.idRandomGame)}>
      <section className="RandomGame">
        <GameItem
          game={props.titleRandomGame}
          summary={props.summaryGame}
          cover={props.coverRandomGame}
          id={props.idRandomGame}
        />
      </section>
    </Link>
  );
};

export default RandomGame;
