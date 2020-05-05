import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utility";

const initialState = {
  randomGameId: "",
  randomGameTitle: "",
  randomGameSummary: "",
  randomGameCover: "",
  preferredGames: [],
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
    default:
      return state;
  }
};

export default reducer;
