import React from "react";
import { Link } from "react-router-dom";

import GameItem from "../GameItem";

const preferenceGames = (props) => {
  const preferencesList = props.preferenceGames.map((game, index) => {
    return (
      <Link
        to="/singlePage"
        onClick={() => props.sendId(game[0])}
        key={index}
        className="GameItem"
      >
        <GameItem
          game={game[1]}
          description={game[3]}
          cover={game[4]}
          id={game[0]}
        />
      </Link>
    );
  });

  return (
    <section className="PreferenceGames">
      <p className="PreferenceGames__title">
        Вам могут понравиться следующие игры
      </p>
      <div className="PreferenceGames__container">{preferencesList}</div>
    </section>
  );
};

export default preferenceGames;
