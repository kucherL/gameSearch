import React from "react";

import "./SimilarGames.scss";
import sprite from "../../../assets/sprite.svg";
import GameItem from "../../UI/GameItem/GameItem";

const SimilarGames = (props) => {
  const alikeList = props.alikeGames.map((game, index) => {
    return (
      <GameItem
        key={index}
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
        sendId={props.sendId}
        ratedGames={props.ratedGames}
      />
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

export default SimilarGames;
