import React from "react";
import { Link } from "react-router-dom";

import "./PreferenceList.scss";
import GameItem from "../../ui/GameItem/GameItem";

const preferenceList = (props) => {
  const list = props.preferenceGames.map((game, index) => {
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
          folders={props.folders}
          addGameToFolder={props.addGameToFolder}
          uid={props.uid}
          addUserRating={props.addUserRating}
        />
      </Link>
    );
  });

  return (
    <section className="PreferenceList">
      <p className="PreferenceList__title">
        Вам могут понравиться следующие игры
      </p>
      <div className="PreferenceList__container">{list}</div>
    </section>
  );
};

export default preferenceList;
