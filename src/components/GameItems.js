import React from "react";

import GameItem from "./GameItem";
import ArrowButton from "./ui/ArrowButton";
import Pagination from "./Pagination";

const header = () => (
  <section className="GameItems">
    <ArrowButton />
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

export default header;
