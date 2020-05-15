import React from "react";

import "./FoldersSection.scss";
import SubmitButton from "../../ui/SubmitButton/SubmitButton";

const foldersSection = (props) => (
  <section className="FoldersSection">
    <div>
      <select className="FoldersSection__select" onChange={props.eventHandler}>
        <option value="">Please choose a folder</option>
        {props.getFoldersList()}
      </select>
      <SubmitButton click={props.showInputHandler}>Add new folder</SubmitButton>
    </div>
    {props.showInput ? (
      <div>
        <input type="text" onChange={props.addFolderName} />
        <SubmitButton
          click={() => props.setNewFolder(props.user, props.folderName)}
        >
          Submit
        </SubmitButton>
      </div>
    ) : null}
    <section className="FoldersSection__folders-games">
      {props.getListOfGames()}
    </section>
  </section>
);

export default foldersSection;
