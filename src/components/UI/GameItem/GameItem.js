import React from "react";
import { Link } from "react-router-dom";

import "./GameItem.scss";
import PosterGame from "../Poster/Poster";
import ToRememberButton from "../ToRememberButton/ToRememberButton";
import AddUsersRating from "../AddUserRating/AddUserRating";
import Title from "../Title/Title";
import Description from "../Description/Description";

const GameItem = (props) => (
  <section className="GameItem">
    <figure className="GameItem__container">
      <Link to={`/game/${props.id}`} onClick={() => props.sendId(props.id)}>
        <PosterGame cover={props.cover} />
      </Link>
      <div className="GameItem__interactive-el">
        {!props.usersGame ? (
          <ToRememberButton
            idGame={props.id}
            cover={props.cover}
            title={props.game}
            genres={props.genres}
            platforms={props.platforms}
            folders={props.folders}
            addGameToFolder={props.addGameToFolder}
            uid={props.uid}
          />
        ) : null}
        <AddUsersRating
          idGame={props.id}
          uid={props.uid}
          addUserRating={props.addUserRating}
          ratedGames={props.ratedGames}
          fetchUserRating={props.fetchUserRating}
        />
      </div>
    </figure>
    <div className="GameItem__info">
      <Title title={props.game} />
      <Description genres={props.genres} platforms={props.platforms} />
    </div>
  </section>
);

export default GameItem;
