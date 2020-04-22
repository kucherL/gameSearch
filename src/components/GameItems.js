import React, {useState} from "react";

import DropdownMenu from "./DropdownMenu";
import GameItem from "./GameItem";
import ArrowButton from "./ui/ArrowButton";
import Pagination from "./Pagination";

const GameItems = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuOpenHandler = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className="GameItems">
      <ArrowButton click={menuOpenHandler} />
      {menuOpen ? <DropdownMenu /> : null}
      <div className="GameItems__container">
        <GameItem />
        <GameItem />
        <GameItem />
        <GameItem />
        <GameItem />
        <GameItem />
        <GameItem />
        <GameItem />
        <GameItem />
      </div>
      <Pagination />
    </section>
  );
};

export default GameItems;
