import * as actionTypes from "../actions/actionTypes";
import { updateObject, genres, platforms } from "../../utility";

const initialState = {
  randomGame: {},
  preferredGames: [],
  choosedId: "",

  genres: genres,
  platforms: platforms,
  filteredGames: [],

  singleCover: "",
  singleName: "",
  singleGenres: [],
  singleRating: "",
  singleVideos: [],
  singleSummary: "",
  singleAlike: [],

  user: "",
  profileData: [],
  userFolders: [],
  folderGames: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_RANDOM_GAME:
      return updateObject(state, {
        randomGame: action.data,
      });
    case actionTypes.GET_PREFERRED_GAMES:
      return updateObject(state, {
        preferredGames: action.data,
      });
    case actionTypes.GET_ID:
      return updateObject(state, {
        choosedId: action.val,
      });
    case actionTypes.FILTER_GAMES:
      return updateObject(state, {
        filteredGames: action.data.map((game) => [game.name, game.summary]),
      });
    case actionTypes.FILTER_GAMES_AND_COVERS:
      return updateObject(state, {
        filteredGames: action.data,
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
      });
    case actionTypes.CHECK_AUTH:
      return updateObject(state, {
        user: action.data,
      });
    case actionTypes.GET_PROFILE_DATA:
      return updateObject(state, {
        profileData: action.data,
      });
    case actionTypes.GET_USER_FOLDERS:
      return updateObject(state, {
        userFolders: action.data,
      })
    case actionTypes.FETCH_GAMES_IN_FOLDER:
      return updateObject(state, {
        folderGames: action.data,
      })
    default:
      return state;
  }
};

export default reducer;
