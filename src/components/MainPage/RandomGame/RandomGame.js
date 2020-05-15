import React from "react";
import { Link } from "react-router-dom";

import "./RandomGame.scss";
import Poster from "../../ui/Poster/Poster";
import Title from "../../ui/Title/Title";
import Rating from "../../ui/Rating/Rating";
import Description from "../../ui/Description/Description";

const randomGame = (props) => {
  return (
    <Link to="/singlePage" onClick={() => props.sendId(props.idRandomGame)}>
      <figure className="RandomGame">
        <Poster cover={props.coverRandomGame} />
        <figcaption className="RandomGame__info">
          <Title title={props.titleRandomGame} />
          <Rating>{"70"}</Rating>
          <Description description={props.summaryGame} />
        </figcaption>
      </figure>
    </Link>
  );
};

export default randomGame;
