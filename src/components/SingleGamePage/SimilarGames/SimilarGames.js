import React from "react";
import { Link } from "react-router-dom";

import "./SimilarGames.scss";
import sprite from "../../../assets/sprite.svg";
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
          genres={game[3]}
          platforms={game[4]}
          cover={game[5]}
          id={game[0]}
          folders={props.folders}
          addGameToFolder={props.addGameToFolder}
          uid={props.uid}
          addUserRating={props.addUserRating}
          getUserFolders={props.getUserFolders}
        />
      </Link>
    );
  });

  return (
    <section className="SimilarGames">
      <div className="SimilarGames__title">
        <svg>
          <use href={sprite + "#icon-spaceinvaders"} />
        </svg>
        <h1>Похожие игры</h1>
      </div>
      <div className="SimilarGames__container">{alikeList}</div>
    </section>
  );
};

export default similarGames;
