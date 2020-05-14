import React, { Component } from "react";

import GameItem from "../GameItem";

class FoldersSection extends Component {
  addFolder = (event) => {
    
  };

  render = () => {
    return (
      <section className="FoldersSection">
      <select className="FoldersSection__select">
        <option value="">Please choose a folder</option>
        <option value="folder">Folder</option>
      </select>
      <button onClick={this.addFolder}>Add new folder</button>
      <GameItem />
    </section>
    )
  };
}

export default FoldersSection;
