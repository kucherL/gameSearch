import React, { useState, useEffect } from "react";

import { instance } from "../axios";

import RandomGame from "../components/MainPage/RandomGame";

const MainPage = () => {
  const [cover, setCover] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const imagesURL = "//images.igdb.com/igdb/image/upload/t_thumb/";

  useEffect(() => {
    getRandomPopularGame();
  }, []);
  useEffect(() => () => {}, []);

  const getRandomPopularGame = () => {
    instance(
      "games/",
      "fields name; where (rating > 95 & popularity > 4); sort popularity; limit 100;"
    )
      .then((response) => {
        let randomInt = getRandomInt(response.data);
        let randomGameId = 0;
        randomGameId = response.data[randomInt].id;
        setTitle(response.data[randomInt].name);
        instance("covers", `fields *; where game=${randomGameId};`).then(
          (response) => {
            let hash = response.data[0].url.split(imagesURL);
            setCover(
              `https://images.igdb.com/igdb/image/upload/t_cover_big/${hash[1]}`
            );
          }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getRandomInt = (arr) => {
    const min = 0;
    const max = arr.length;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <section className="MainPage">
      <RandomGame coverRandomGame={cover} titleRandomGame={title} />
    </section>
  );
};

export default MainPage;
