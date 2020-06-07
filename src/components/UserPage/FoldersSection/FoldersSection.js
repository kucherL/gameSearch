import React from "react";

import "./FoldersSection.scss";
import GameItem from "../../UI/GameItem/GameItem";
import SubmitButton from "../../UI/SubmitButton/SubmitButton";
import sprite from "../../../assets/sprite.svg";

const FoldersSection = (props) => {
  const addFolderHandler = () => {
    props.setNewFolder(props.user, props.folderName);
    props.getUserFolders(props.user);
    props.showInputHandler();
  };

  const deleteFolderHandler = () => {
    props.deleteFolder(props.user, props.folderId);
    props.getUserFolders(props.user);
    props.showFoldersHandler();
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
    <section className="FoldersSection">
      <div>
        <select
          className="FoldersSection__select"
          onClick={props.eventHandler}
          defaultValue={"DEFAULT"}
        >
          <option value="DEFAULT" disabled hidden>
            --Choose a folder--
          </option>
          {getFoldersList()}
        </select>
        <SubmitButton click={props.showInputHandler}>
          Add new folder
        </SubmitButton>
      </div>
      {props.showInput ? (
        <div>
          <input type="text" onChange={props.addFolderName} />
          <SubmitButton click={addFolderHandler}>Submit</SubmitButton>
        </div>
      ) : null}
      {props.showFolders ? (
        <>
          <div className="FoldersSection__title">
            <h1>{props.title}</h1>
            <button hint="Delete folder" onClick={deleteFolderHandler}>
              <svg>
                <use href={sprite + "#icon-trashcan"} />
              </svg>
            </button>
          </div>
          <div className="FoldersSection__folder-game-list">
            {props.games.map((game) => {
              return (
                <div
                  key={game[0].gameData.id}
                  className="FoldersSection__game-item"
                >
                  <GameItem
                    game={game[0].gameData.title}
                    genres={game[0].gameData.genres}
                    platforms={game[0].gameData.platforms}
                    cover={game[0].gameData.cover}
                    id={game[0].gameData.id}
                    folders={props.folders}
                    addGameToFolder={props.addGameToFolder}
                    uid={props.user}
                    addUserRating={props.addUserRating}
                    sendId={props.sendId}
                    ratedGames={props.ratedGames}
                    fetchUserRating={props.fetchUserRating}
                    usersGame={props.usersGame}
                  />
                  <button
                    hint="Delete game"
                    className="FoldersSection__delete-game"
                    onClick={() =>
                      props.deleteGame(props.user, props.folderId, game[1])
                    }
                  >
                    <svg>
                      <use href={sprite + "#icon-trashcan"} />
                    </svg>
                  </button>
                </div>
              );
            })}
          </div>
        </>
      ) : null}
    </section>
  );
};

export default FoldersSection;
