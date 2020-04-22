import React, { useState } from "react";

import axios from "axios";

const PosterGame = () => {
  const [poster, setPoster] = useState("");

  axios({
    url: "https://api-v3.igdb.com/games",
    method: "POST",
    headers: {
      "Accept": "application/json",
      // "Access-Control-Allow-Origin": "*",
      // "X-Requested-With": "XMLHttpRequest",
      "user-key": "fc3b55ff669b5bddd121e58a4b3ec8f9",
    },
    data:
      "fields screenshots",
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });

  return (
    <img
      src={require("../../assets/Death_Stranding_Poster.jpg")}
      alt="/"
      className="PosterGame"
    />
  );
};

export default PosterGame;
