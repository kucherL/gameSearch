import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utility";

const initialState = {
  randomGameId: "",
  randomGameTitle: "",
  randomGameSummary: "",
  randomGameCover: "",
  preferredGames: [],
  choosedId: "",

  singleCover: "",
  singleName: "",
  singleGenres: [],
  singleRating: "",
  singleVideos: [],
  singleSummary: "",
  singleAlike: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_RANDOM_GAME:
      return updateObject(state, {
        randomGameId: action.id,
        randomGameTitle: action.title,
        randomGameSummary: action.summary,
      });
    case actionTypes.GET_RANDOM_COVER:
      return updateObject(state, {
        randomGameCover: action.cover,
      });
    case actionTypes.GET_PREFERRED_GAMES:
      return updateObject(state, {
        preferredGames: action.data,
      });
    case actionTypes.GET_ID:
      return updateObject(state, {
        choosedId: action.val,
      });
    case actionTypes.GET_SINGLE_GAME_INFO:
      return updateObject(state, {
        singleCover: action.data[1],
        singleName: action.data[0].name,
        singleGenres: action.data[2],
        singleRating: Math.floor(action.data[0].rating),
        singleVideos: action.data[3],
        singleSummary: action.data[0].summary,
        singleAlike: action.data[4],
      })
    default:
      return state;
  }
};

export default reducer;
