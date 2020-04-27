import React from "react";

import GenresSearch from "./GenresSearch";

const filterPanel = (props) => {
  return (
    <div>
      <GenresSearch genres={props.genres} />
    </div>
  );
};

export default filterPanel;
