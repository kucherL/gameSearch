import * as actionTypes from "../actions/actionTypes";
import { updateObject, genres, platforms } from "../../utility";

const initialState = {
  randomGame: {},
  preferredGames: [],
  choosedId: "",
  filteredGames: [],
  genres: genres,
  platforms: platforms,

  singlePageGame: {
    singleCover: "",
    singleName: "",
    singleGenres: [],
    singlePlatforms: [],
    singleRating: "",
    singleVideos: [],
    singleSummary: "",
    singleAlike: [],
  },

  user: "",
  profileData: [],
  userFolders: [],
  folderGames: [],
  folderTitle: "",
  ratedGames: {},

  error: null,
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
        choosedId: action.data,
      });
    case actionTypes.FILTER_GAMES_AND_COVERS:
      return updateObject(state, {
        filteredGames: action.data,
      });
    case actionTypes.GET_SINGLE_GAME_INFO:
      return updateObject(state, {
        singlePageGame: {
          singleCover: action.data[1],
          singleName: action.data[0].name,
          singleGenres: action.data[0].genres,
          singlePlatforms: action.data[0].platforms,
          singleRating: Math.round(action.data[0].rating),
          singleVideos: action.data[2],
          singleSummary: action.data[0].summary,
          singleAlike: action.data[3],
        },
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
      });
    case actionTypes.FETCH_GAMES_IN_FOLDER:
      return updateObject(state, {
        folderGames: action.data.folderGames,
        folderTitle: action.data.folderTitle,
      });
    case actionTypes.FETCH_USER_RATING:
      return updateObject(state, {
        ratedGames: action.data,
      });
    case actionTypes.SET_ERROR:
      return updateObject(state, {
        error: action.data,
      });
    case actionTypes.CLEAN_ERROR:
      return updateObject(state, {
        error: null,
      });
    case actionTypes.LOGOUT:
      return updateObject(state, {
        user: {
          uid: "",
        },
      });
    default:
      return state;
  }
};

export default reducer;
