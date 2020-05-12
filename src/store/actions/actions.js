import * as actionTypes from "./actionTypes";
import { IMAGES_URL } from "../../utility";
import { instance } from "../../axios";
import { auth, firestore } from "../../firebase";

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

export const changeSearchField = (value) => {
  return {
    type: actionTypes.CHANGE_SEARCH_FIELD,
    val: value,
  };
};

export const selectGenres = (value) => {
  return {
    type: actionTypes.SELECT_GENRES,
    val: value,
  };
};

export const selectPlatforms = (value) => {
  return {
    type: actionTypes.SELECT_PLATFORMS,
    val: value,
  };
};

export const selectYear = (value) => {
  return {
    type: actionTypes.SELECT_YEAR,
    val: value,
  };
};

export const selectRating = (value) => {
  return {
    type: actionTypes.SELECT_RATING,
    val: value,
  };
};

export const selectPopularity = (value) => {
  return {
    type: actionTypes.SELECT_POPULARITY,
    val: value,
  };
};

export const changePageForward = (filter) => {
  return {
    type: actionTypes.CHANGE_PAGE_FORWARD,
    func: filter(),
  };
};

export const changePageBack = (filter) => {
  return {
    type: actionTypes.CHANGE_PAGE_BACK,
    func: filter(),
  };
};

export const getGenres = () => {
  return async (dispatch) => {
    const genres = await instance(
      "genres",
      "fields name, id; sort name; limit 50;"
    );
    dispatch({
      type: actionTypes.GET_GENRES,
      data: genres.data,
    });
  };
};

export const getPlatforms = () => {
  return async (dispatch) => {
    const platforms = await instance(
      "platforms",
      "fields name, id; sort name; limit 200;"
    );
    dispatch({
      type: actionTypes.GET_PLATFORMS,
      data: platforms.data,
    });
  };
};

export const filterGames = (apiString, offset) => {
  return async (dispatch) => {
    const filteredGames = await instance(
      "games/",
      `fields name, cover, summary;${apiString}; sort rating; limit 10; offset ${offset};`
    );
    if (filteredGames.data.some((game) => !game.cover)) {
      dispatch({
        type: actionTypes.FILTER_GAMES,
        data: filterGames.data,
      });
    } else {
      let temporaryDataPreference = filteredGames.data
        .sort((a, b) => a.cover - b.cover)
        .map((game) => [game.name, game.cover, game.summary]);
      let temporaryData = filteredGames.data
        .map((item) => item.cover)
        .join(", ");
      const filteredGamesAndCovers = await instance(
        "covers",
        `fields url; where id=(${temporaryData});`
      );
      let coversURL = filteredGamesAndCovers.data.map((cover) => cover.url);
      for (let i = 0; i < coversURL.length; i++) {
        let hash = coversURL[i].split(IMAGES_URL);
        temporaryDataPreference[i].push(
          `https://images.igdb.com/igdb/image/upload/t_cover_big/${hash[1]}`
        );
      }
      dispatch({
        type: actionTypes.FILTER_GAMES_AND_COVERS,
        data: temporaryDataPreference,
      });
    }
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
    genres = genres.data.map((genre) => genre.name);

    let videos = await instance(
      "game_videos",
      `fields video_id; where game=${id};`
    );
    if (videos.data.length > 0) {
      videos = videos.data.map((video) => video.video_id);
    } else {
      videos = null;
    }

    let alike = await instance(
      "games/",
      `fields id, cover, name, rating; where id=(${info.data[0].similar_games}); limit 5;`
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

export const checkAuth = () => {
  return async (dispatch) => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        dispatch({
          type: actionTypes.CHECK_AUTH,
          data: { uid: userAuth.id, ...userAuth.data },
        });
      }
      dispatch({
        type: actionTypes.CHECK_AUTH,
        data: userAuth,
      });
    });
  };
};

export const getProfileData = (user) => {
  return async (dispatch) => {
    let profile = await firestore
      .doc(`users/${user}`)
      .get();
      const profileData = profile.data();
    dispatch({
      type: actionTypes.GET_PROFILE_DATA,
      data: profileData,
    });
  };
};
