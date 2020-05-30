import React from "react";

import sprite from "../../../assets/sprite.svg";
import "./Trailers.scss";

const Trailers = (props) => {
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
      <div className="Trailers__title">
        <svg>
          <use href={sprite + "#icon-film"} />
        </svg>
        <h1>Trailers</h1>
      </div>
      <div className="Trailers__container">{trailersConteiner}</div>
    </section>
  );
};

export default Trailers;
