import React from "react";
import { Link } from "react-router-dom";

import GameItem from "../GameItem";

const preferenceGames = (props) => {
  const preferencesList = props.preferenceGames.map((game) => {
    return (
      <Link to="/singlePage">
        <GameItem
          game={game[1]}
          summary={game[3]}
          cover={game[4]}
          key={game[0]} //id
        />
      </Link>
    );
  });

  return (
    <section className="PreferenceGames">
      <p className="PreferenceGames__title">
        Вам могут понравиться следующие игры
      </p>
      {preferencesList}
    </section>
  );
};

export default preferenceGames;
