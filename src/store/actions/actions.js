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
      "fields id, rating, name, summary; where (rating > 70 & popularity > 4); limit 50;"
    );
    const randomInt = getRandomInt(randomGames.data);
    const randomGameId = randomGames.data[randomInt].id;
    const randomGamesCovers = await instance(
      "covers",
      `fields url; where game=${randomGameId};`
    );
    let hash = randomGamesCovers.data[0].url.split(IMAGES_URL);
    dispatch({
      type: actionTypes.GET_RANDOM_GAME,
      data: {
        rating: randomGames.data[randomInt].rating,
        id: randomGames.data[randomInt].id,
        title: randomGames.data[randomInt].name,
        summary: randomGames.data[randomInt].summary,
        cover: `https://images.igdb.com/igdb/image/upload/t_cover_big/${hash[1]}`,
      },
    });
  };
};

export const getPreferredGames = () => {
  return async (dispatch) => {
    const preferredGames = await instance(
      "games/",
      "fields id, name, cover, genres, platforms; where (rating > 80 & popularity > 4); sort rating; limit 12;"
    );
    let temporaryDataPreference = preferredGames.data
      .sort((a, b) => a.cover - b.cover)
      .map((game) => [
        game.id,
        game.name,
        game.cover,
        game.genres,
        game.platforms,
      ]);
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
        `https://images.igdb.com/igdb/image/upload/t_cover_small/${hash[1]}`
      );
    }
    dispatch({
      type: actionTypes.GET_PREFERRED_GAMES,
      data: temporaryDataPreference,
    });
  };
};

export const filterGames = (apiString, offset) => {
  return async (dispatch) => {
    const filteredGames = await instance(
      "games/",
      `fields id, name, cover, genres, platforms;${apiString}; sort rating; limit 12; offset ${offset};`
    );
    let temporaryDataPreference = filteredGames.data
      .sort((a, b) => a.cover - b.cover)
      .map((game) => [
        game.id,
        game.name,
        game.cover,
        game.genres,
        game.platforms,
      ]);
    let temporaryData = filteredGames.data.map((item) => item.cover).join(", ");
    const filteredGamesAndCovers = await instance(
      "covers",
      `fields url; where id=(${temporaryData});`
    );
    let coversURL = filteredGamesAndCovers.data.map((cover) => cover.url);
    for (let i = 0; i < coversURL.length; i++) {
      let hash = coversURL[i].split(IMAGES_URL);
      temporaryDataPreference[i].push(
        `https://images.igdb.com/igdb/image/upload/t_cover_small/${hash[1]}`
      );
    }
    dispatch({
      type: actionTypes.FILTER_GAMES_AND_COVERS,
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
        `https://images.igdb.com/igdb/image/upload/t_cover_small/${hash[1]}`
      );
    }
    alike = temporaryDataPreference;

    let allInfo = info.data.concat(cover, [genres], [videos], [alike]);
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
    const profile = await firestore.doc(`users/${user}`).get();
    const profileData = profile.data();
    dispatch({
      type: actionTypes.GET_PROFILE_DATA,
      data: profileData,
    });
  };
};

export const setNewFolder = (user, title) => {
  return async () => {
    await firestore.collection(`users/${user}/folders`).add({ title });
  };
};

export const getUserFolders = (user) => {
  return async (dispatch) => {
    const folders = await firestore.collection(`users/${user}/folders`).get();
    const userFolders = folders.docs.map((doc) => [doc.id, doc.data()]);
    dispatch({
      type: actionTypes.GET_USER_FOLDERS,
      data: userFolders,
    });
  };
};

export const addGameToFolder = (gameData, user, idFolder) => {
  return async () => {
    await firestore
      .collection(`users/${user}/folders/${idFolder}/games`)
      .add({ gameData });
  };
};

export const fetchGamesInFolder = (user, idFolder) => {
  return async (dispatch) => {
    const games = await firestore
      .collection(`users/${user}/folders/${idFolder}/games`)
      .get();
    const folderGames = games.docs.map((doc) => doc.data());
    dispatch({
      type: actionTypes.FETCH_GAMES_IN_FOLDER,
      data: folderGames,
    });
  };
};

export const addUserRating = (user, starValue, idGame) => {
  console.log(user, starValue, idGame);
  return async () => {
    await firestore
      .collection(`users/${user}/playedGames`)
      .add({ starValue, idGame });
  };
};
