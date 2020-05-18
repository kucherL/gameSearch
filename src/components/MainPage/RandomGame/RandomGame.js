import React from "react";
import { Link } from "react-router-dom";

import "./RandomGame.scss";
import Poster from "../../ui/Poster/Poster";
import Title from "../../ui/Title/Title";
import Rating from "../../ui/Rating/Rating";

const randomGame = (props) => {
  return (
    <Link to="/singlePage" onClick={() => props.sendId(props.idRandomGame)}>
      <figure className="RandomGame">
        <Poster cover={props.coverRandomGame} />
        <figcaption className="RandomGame__info">
          <Title title={props.titleRandomGame} />
          <Rating>{Math.floor(props.rating)}</Rating>
          <p>{props.summaryGame}</p>
        </figcaption>
      </figure>
    </Link>
  );
};

export default randomGame;
