import React from "react";

import sprite from "../../../assets/sprite.svg";
import "./Trailers.scss";

const trailers = (props) => {
  const trailersConteiner = props.videos.map((video, index) => {
    return (
      <iframe
        key={index}
        title={index}
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${video}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    );
  });

  return (
    <section className="Trailers">
      <svg>
        <use href={sprite + "#icon-film"} />
      </svg>
      <p className="TitleGame">Трейлеры</p>
      <div className="Trailers__container">{trailersConteiner}</div>
    </section>
  );
};

export default trailers;
