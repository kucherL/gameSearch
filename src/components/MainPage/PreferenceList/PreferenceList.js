import React from "react";

import "./PreferenceList.scss";
import GameItem from "../../UI/GameItem/GameItem";

const PreferenceList = (props) => {
  const list = props.preferenceGames.map((game, index) => {
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
        fetchUserRating={props.fetchUserRating}
      />
    );
  });

  return (
    <section className="PreferenceList">
      <h1 className="PreferenceList__title">You might like those games</h1>
      <div className="PreferenceList__container">{list}</div>
    </section>
  );
};

export default PreferenceList;
