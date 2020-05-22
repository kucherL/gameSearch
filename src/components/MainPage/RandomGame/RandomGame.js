import React from "react";
import { Link } from "react-router-dom";

import "./RandomGame.scss";
import Poster from "../../UI/Poster/Poster";
import Title from "../../UI/Title/Title";
import Rating from "../../UI/Rating/Rating";

const RandomGame = (props) => {
  return (
    <figure className="RandomGame">
      <Link
        to={`/game/${props.idRandomGame}`}
        onClick={() => props.sendId(props.idRandomGame)}
      >
        <Poster cover={props.coverRandomGame} />
      </Link>
      <figcaption className="RandomGame__info">
        <Title title={props.titleRandomGame} />
        <Rating>{Math.floor(props.rating)}</Rating>
        <p>{props.summaryGame}</p>
      </figcaption>
    </figure>
  );
};

export default RandomGame;
