import React, { useState } from "react";
import sprite from "../../../assets/sprite.svg";

import "./ToRememberButton.scss";

const ToRememberButton = (props) => {
  const [showFolders, setShowFolders] = useState(false);

  const foldersHandler = () => {
    setShowFolders(!showFolders);
  };

  const gameDataHandler = async (event) => {
    const gameData = {
      id: props.idGame,
      cover: props.cover,
      title: props.title,
      genres: props.genres,
      platforms: props.platforms,
    };
    await props.addGameToFolder(gameData, props.uid, event.target.value);
  };

  const getFoldersList = () => {
    props.getUserFolders(props.uid);
    return props.folders.map((folder, index) => {
      return (
        <option key={index} value={folder[0]}>
          {folder[1].title}
        </option>
      );
    });
  };

  return (
    <button
      className="ToRememberButton"
      onClick={foldersHandler}
      disabled={props.uid ? false : true}
    >
      <svg>
        <use href={sprite + "#icon-gamepad"} />
      </svg>
      {showFolders ? (
        <select className="FoldersSection__select" onChange={gameDataHandler}>
          <option value="">Please choose a folder</option>
          {getFoldersList()}
        </select>
      ) : null}
    </button>
  );
};

export default ToRememberButton;
