import * as actionTypes from "./actionTypes";
import { instance } from "../../axios";
import { IMAGES_URL } from "../../utility";

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
      `fields name, cover;${apiString}; sort rating; limit 10; offset ${offset};`
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
