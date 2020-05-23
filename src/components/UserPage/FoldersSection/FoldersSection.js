import React from "react";

import "./FoldersSection.scss";
import SubmitButton from "../../UI/SubmitButton/SubmitButton";
import sprite from "../../../assets/sprite.svg";

const FoldersSection = (props) => {
  return (
    <section className="FoldersSection">
      <div>
        <select className="FoldersSection__select" onClick={props.eventHandler}>
          {props.getFoldersList()}
        </select>
        <SubmitButton click={props.showInputHandler}>
          Add new folder
        </SubmitButton>
      </div>
      {props.showInput ? (
        <div>
          <input type="text" onChange={props.addFolderName} />
          <SubmitButton
            click={() => {
              props.setNewFolder(props.user, props.folderName);
              props.getUserFolders(props.user);
            }}
          >
            Submit
          </SubmitButton>
        </div>
      ) : null}
      {props.showFolders ? (
        <div className="FoldersSection__folders-games">
          <div className="FoldersSection__title">
            <h1>{props.title}</h1>
            <button
              hint="Delete folder"
              onClick={() => {
                props.deleteFolder(props.user, props.folderId);
                props.getUserFolders(props.user);
              }}
            >
              <svg>
                <use href={sprite + "#icon-trashcan"} />
              </svg>
            </button>
          </div>
          {props.getListOfGames()}
        </div>
      ) : null}
    </section>
  );
};

export default FoldersSection;
