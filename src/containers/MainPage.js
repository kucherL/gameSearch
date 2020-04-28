import React, { useState, useEffect } from "react";

import { instance } from "../axios";

import RandomGame from "../components/MainPage/RandomGame";
import PreferenceGames from "../components/MainPage/PreferenceGames";

const MainPage = () => {
  const [cover, setCover] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [preferenceGames, setPreferenceGames] = useState([]);

  const imagesURL = "//images.igdb.com/igdb/image/upload/t_thumb/";

  useEffect(() => {
    getRandomPopularGame();
    getPreferenceGames();
  }, []);
  useEffect(() => {}, []);

  const getRandomPopularGame = () => {
    instance(
      "games/",
      "fields name, id; where (rating > 95 & popularity > 4); sort popularity; limit 100;"
    )
      .then((response) => {
        let randomInt = getRandomInt(response.data);
        let randomGameId = 0;
        randomGameId = response.data[randomInt].id;
        setTitle(response.data[randomInt].name);
        instance("covers", `fields url; where game=${randomGameId};`).then(
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

  const getPreferenceGames = () => {
    instance(
      "games/",
      "fields name, cover; where (rating > 95 & popularity > 4); sort rating;"
    ).then((response) => {
      let temporaryDataPreference = response.data
        .sort((a, b) => a.cover - b.cover)
        .map((game) => [game.name, game.cover]);
      let temporaryData = response.data.map((item) => item.cover).join(", ");
      instance("covers", `fields url; where id=(${temporaryData});`).then(
        (response) => {
          let coversURL = response.data.map((cover) => cover.url);
          for (let i = 0; i < coversURL.length; i++) {
            let hash = coversURL[i].split(imagesURL);
            temporaryDataPreference[i].push(
              `https://images.igdb.com/igdb/image/upload/t_cover_big/${hash[1]}`
            );
          }
          setPreferenceGames(temporaryDataPreference);
        }
      );
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
      <PreferenceGames preferenceGames={preferenceGames} />
    </section>
  );
};

export default MainPage;
