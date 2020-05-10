import React from "react";

import GameItem from "../GameItem";

const FoldersSection = () => {
  return (
    <section className="FoldersSection">
      <select className="FoldersSection__select">
        <option value="">Please choose a folder</option>
        <option value="folder">Folder</option>
      </select>
      <GameItem />
    </section>
  )
}

export default FoldersSection;