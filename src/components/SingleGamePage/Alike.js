import React from "react";

import GameItem from "../GameItem";

const Alike = () => {
  return (
    <section className="Alike">
      <p className="TitleGame">Похожие игры</p>
      <div className="Alike__container">
        <GameItem />
        <GameItem />
        <GameItem />
      </div>
    </section>
  )
};

export default Alike;