import React from "react";
import { Link } from "react-router-dom";

import "./SimilarGames.scss";
import GameItem from "../../ui/GameItem/GameItem";

const similarGames = (props) => {
  const alikeList = props.alikeGames.map((game, index) => {
    return (
      <Link
        to="/singlePage"
        onClick={() => props.sendId(game[0])}
        key={index}
        className="GameItem"
      >
        <GameItem
          game={game[1]}
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
    <section className="SimilarGames">
      <p className="SimilarGames__title">Похожие игры</p>
      <div className="SimilarGames__container">{alikeList}</div>
    </section>
  );
};

export default similarGames;
