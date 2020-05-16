import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

import "./ToRememberButton.scss";

const toRememberButton = () => {
  const [showFolders, setShowFolders] = useState(false);

  const foldersHandler = () => {
    setShowFolders(!showFolders);
  };

  const gameDataHandler = (event) => {
    const gameData = [
      this.props.idGame,
      this.props.cover,
      this.props.title,
      this.props.description,
    ];
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
    <button className="ToRememberButton" onClick={foldersHandler}>
      <FontAwesomeIcon icon={faGamepad} size={"2x"} />
      {showFolders ? (
        <select className="FoldersSection__select" onChange={gameDataHandler}>
          <option value="">Please choose a folder</option>
          {getFoldersList()}
        </select>
      ) : null}
    </button>
  );
};

export default toRememberButton;
