import React from "react";

import { genres, platforms } from "../../../utility";
import "./Description.scss";

const description = (props) => {
  let namedGenres = "";
  let namedPlatforms = "";

  if (props.genres && props.platforms) {
    namedGenres = props.genres.map((gen) => `${genres[gen].name}/ `);
    namedPlatforms = props.platforms.map((p) => `${platforms[p].name}/ `);
  }

  return (
    <div className="Description">
      <p>{namedGenres}</p>
      <p>{namedPlatforms}</p>
    </div>
  );
};

export default description;
