import React, { useState } from "react";

import PosterGame from "./ui/PosterGame";
import Rating from "./ui/Rating";
import TitleGame from "./ui/TitleGame";
import DescriptionGame from "./ui/DescriptionGame";

import {instance} from "../axios";

const RandomGame = () => {
  // const [screenShot, setScreenShot] = useState("");
  // instance("screenshots", "alpha_channel,animated,game,height,image_id,url,width")
  //   .then((response) => {
  //     setScreenShot(`https:${response.data[0].url}`);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });

  return (
    <section className="RandomGame">
      {/* <img src={screenShot} alt="screenshot" /> */}
      <PosterGame />
      <div className="RandomGame__container">
        <Rating />
        <TitleGame />
        <DescriptionGame />
      </div>
    </section>
  );
};

export default RandomGame;
