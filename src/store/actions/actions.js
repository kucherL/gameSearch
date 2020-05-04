import * as actionTypes from "./actionTypes";

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
