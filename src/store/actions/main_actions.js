import * as actionTypes from "./actionTypes";
import { IMAGES_URL } from "../../utility";
import { instance } from "../../axios";

export const getRandomGame = (getRandomInt) => {
  return async (dispatch) => {
    const randomGames = await instance(
      "games/",
      "fields name, id, summary; where (rating > 95 & popularity > 4); sort popularity; limit 100;"
    );
    let randomInt = getRandomInt(randomGames.data);
    let randomGameId = randomGames.data[randomInt].id;
    dispatch({
      type: actionTypes.GET_RANDOM_GAME,
      title: randomGames.data[randomInt].name,
      summary: randomGames.data[randomInt].summary,
    });
    const randomGamesCovers = await instance(
      "covers",
      `fields url; where game=${randomGameId};`
    );
    let hash = randomGamesCovers.data[0].url.split(IMAGES_URL);
    dispatch({
      type: actionTypes.GET_RANDOM_COVER,
      cover: `https://images.igdb.com/igdb/image/upload/t_cover_big/${hash[1]}`,
    });
  };
};

export const getPreferredGames = () => {
  return async (dispatch) => {
    const preferredGames = await instance(
      "games/",
      "fields name, cover, summary; where (rating > 95 & popularity > 4); sort rating;"
    );
    let temporaryDataPreference = preferredGames.data
      .sort((a, b) => a.cover - b.cover)
      .map((game) => [game.name, game.cover, game.summary]);
    let temporaryData = preferredGames.data
      .map((item) => item.cover)
      .join(", ");
    const preferredGamesCovers = await instance(
      "covers",
      `fields url; where id=(${temporaryData});`
    );
    let coversURL = preferredGamesCovers.data.map((cover) => cover.url);
    for (let i = 0; i < coversURL.length; i++) {
      let hash = coversURL[i].split(IMAGES_URL);
      temporaryDataPreference[i].push(
        `https://images.igdb.com/igdb/image/upload/t_cover_big/${hash[1]}`
      );
    }
    dispatch({
      type: actionTypes.GET_PREFERRED_GAMES,
      data: temporaryDataPreference,
    });
  };
};
