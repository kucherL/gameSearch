import React from "react";

import GameItem from "../GameItem";

const preferenceGames = (props) => {
  const preferencesList = props.preferenceGames.map((game, index) => {
    return <GameItem game={game[0]} summary={game[2]} cover={game[3]} key={index} />
  });

  return (
    <section className="PreferenceGames">
      <p className="PreferenceGames__title">Вам могут понравиться следующие игры</p>
      {preferencesList}
    </section>
  );
};

export default preferenceGames;
