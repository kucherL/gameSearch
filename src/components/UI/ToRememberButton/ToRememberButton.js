import React, { useState } from "react";
import sprite from "../../../assets/sprite.svg";

import "./ToRememberButton.scss";

const ToRememberButton = (props) => {
  const [showFolders, setShowFolders] = useState(false);

  const foldersHandler = () => {
    setShowFolders(!showFolders);
  };

  const gameDataHandler = (event) => {
    const gameData = {
      id: props.idGame,
      cover: props.cover,
      title: props.title,
      genres: props.genres,
      platforms: props.platforms,
    };
    props.addGameToFolder(gameData, props.uid, event.target.value);
  };

  const getFoldersList = () => {
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
      hint="Add game to folder"
      onClick={foldersHandler}
      disabled={props.uid ? false : true}
    >
      <svg>
        <use href={sprite + "#icon-gamepad"} />
      </svg>
      {showFolders ? (
        <select
          className="ToRememberButton__select"
          onClick={gameDataHandler}
          defaultValue={"DEFAULT"}
        >
          <option value="DEFAULT" disabled hidden>
            --Choose a folder--
          </option>
          {getFoldersList()}
        </select>
      ) : null}
    </button>
  );
};

export default ToRememberButton;
