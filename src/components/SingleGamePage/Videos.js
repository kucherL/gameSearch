import React from "react";

const Videos = (props) => {
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
    <section className="Videos">
      <p className="TitleGame">Трейлеры</p>
      <div className="Videos__container">{trailersConteiner}</div>
    </section>
  );
};

export default Videos;
