import * as actionTypes from "./actionTypes";
import { IMAGES_URL } from "../../utility";
import { instance } from "../../axios";

export const getId = (value) => {
  return {
    type: actionTypes.GET_ID,
    val: value,
  };
};

export const getRandomGame = (getRandomInt) => {
  return async (dispatch) => {
    const randomGames = await instance(
      "games/",
      "fields id, name, summary; where (rating > 95 & popularity > 4); sort popularity; limit 100;"
    );
    let randomInt = getRandomInt(randomGames.data);
    let randomGameId = randomGames.data[randomInt].id;
    dispatch({
      type: actionTypes.GET_RANDOM_GAME,
      id: randomGames.data[randomInt].id,
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
      "fields id, name, cover, summary; where (rating > 95 & popularity > 4); sort rating;"
    );
    let temporaryDataPreference = preferredGames.data
      .sort((a, b) => a.cover - b.cover)
      .map((game) => [game.id, game.name, game.cover, game.summary]);
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

export const getSingleGameInfo = (id) => {
  return async (dispatch) => {
    const info = await instance(
      "games/",
      `fields cover, name, genres, rating, videos, summary, similar_games; where id=${id};`
    );

    let cover = await instance(
      "covers",
      `fields url; where id=${info.data[0].cover};`
    );
    let hash = cover.data[0].url.split(IMAGES_URL);
    cover = `https://images.igdb.com/igdb/image/upload/t_cover_big/${hash[1]}`;

    let genres = await instance(
      "genres",
      `fields name; where id=(${info.data[0].genres});`
    );
    genres = genres.data.map(genre => genre.name);

    let videos = await instance(
      "game_videos",
      `fields video_id; where game=${id};`
    );
    if (videos.data.length > 0) {
      videos = videos.data.map(video => video.video_id);
    } else {
      videos = null;
    };

    let alike = await instance(
      "games/",
      `fields id, cover, name, rating; where id=(${info.data[0].similar_games});`
    );
    let temporaryDataPreference = alike.data
    .sort((a, b) => a.cover - b.cover)
    .map((game) => [game.id, game.name, game.rating, game.cover]);
    let temporaryData = alike.data.map((item) => item.cover).join(", ");
    let alikeCovers = await instance(
      "covers",
      `fields url; where id=(${temporaryData});`
    );
    let coversURL = alikeCovers.data.map((cover) => cover.url);
    for (let i = 0; i < coversURL.length; i++) {
      let hash = coversURL[i].split(IMAGES_URL);
      temporaryDataPreference[i].push(
        `https://images.igdb.com/igdb/image/upload/t_cover_big/${hash[1]}`
      );
    }
    alike = temporaryDataPreference;

    let allInfo = info.data.concat(cover, [genres], [videos], [alike]);
    console.log(allInfo);
    dispatch({
      type: actionTypes.GET_SINGLE_GAME_INFO,
      data: allInfo,
    });
  };
};
