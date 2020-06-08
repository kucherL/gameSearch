import React from "react";

import { genres, platforms } from "../../../utility";
import "./Description.scss";

const Description = (props) => {
  const namedGenres = props.genres
    ? props.genres.map((gen) => `${genres[gen].name}/ `)
    : null;
  const namedPlatforms = props.platforms
    ? props.platforms.map((p) => `${platforms[p].name}/ `)
    : null;

  return (
    <div className="Description">
      <p className="Description__genres">
        <span>Genres:</span> {namedGenres}
      </p>
      <p className="Description__platforms">
        <span>Platforms:</span> {namedPlatforms}
      </p>
    </div>
  );
};

export default Description;
