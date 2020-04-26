import React, { useState } from "react";

const PosterGame = () => {
  const [poster, setPoster] = useState("");

  return (
    <img
      src={require("../../assets/Death_Stranding_Poster.jpg")}
      alt="/"
      className="PosterGame"
    />
  );
};

export default PosterGame;
