import React from "react";
import { Link } from "react-router-dom";

import GameItem from "../GameItem";

const Alike = (props) => {
  const alikeList = props.alikeGames.map((game, index) => {
    return (
      <Link to="/singlePage" onClick={() => props.sendId(game[0])} key={index}>
        <GameItem
          game={game[1]}
          cover={game[4]}
          id={game[0]}
        />
      </Link>
    );
  });

  return (
    <section className="Alike">
      <p className="TitleGame">Похожие игры</p>
      <div className="Alike__container">
        {alikeList}
      </div>
    </section>
  )
};

export default Alike;