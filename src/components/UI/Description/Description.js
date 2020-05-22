import React from "react";

import { genres, platforms } from "../../../utility";
import "./Description.scss";

const Description = (props) => {
  let namedGenres = "";
  let namedPlatforms = "";

  if (props.genres && props.platforms) {
    namedGenres = props.genres.map((gen) => `${genres[gen].name}/ `);
    namedPlatforms = props.platforms.map((p) => `${platforms[p].name}/ `);
  }

  return (
    <div className="Description">
      <p className="Description__genres" hint="Жанры">
        {namedGenres}
      </p>
      <p className="Description__platforms" hint="Платформы">
        {namedPlatforms}
      </p>
    </div>
  );
};

export default Description;
