import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utility";

const initialState = {
  searchField: "",
  selectedGenres: [],
  selectedPlatforms: [],
  selectedYear: "",
  selectedRating: "80",
  selectedPopularity: "4",
  pages: [1, 2, 3],
  offset: 0,
  genres: [],
  platforms: [],
  filteredGames: [],
  choosedId: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_SEARCH_FIELD:
      return updateObject(state, { searchField: action.val });
    case actionTypes.SELECT_GENRES:
      if (state.selectedGenres.includes(action.val)) {
        return updateObject(state, {
          selectedGenres: state.selectedGenres.filter(
            (el) => el !== action.val
          ),
        });
      } else {
        return updateObject(state, {
          selectedGenres: state.selectedGenres.concat(action.val),
        });
      }
    case actionTypes.SELECT_PLATFORMS:
      if (state.selectedPlatforms.includes(action.val)) {
        return updateObject(state, {
          selectedPlatforms: state.selectedPlatforms.filter(
            (el) => el !== action.val
          ),
        });
      } else {
        return updateObject(state, {
          selectedPlatforms: state.selectedPlatforms.concat(action.val),
        });
      }
    case actionTypes.SELECT_YEAR:
      return updateObject(state, { selectedYear: action.val });
    case actionTypes.SELECT_RATING:
      return updateObject(state, { selectedRating: action.val });
    case actionTypes.SELECT_POPULARITY:
      return updateObject(state, { selectedPopularity: action.val });
    case actionTypes.CHANGE_PAGE_FORWARD:
      let tempForwardArr = [...state.pages];
      tempForwardArr.shift();
      tempForwardArr.push(state.pages[2] + 1);
      return updateObject(
        state,
        {
          pages: tempForwardArr,
          offset: (state.offset += 10),
        },
        () => action.func()
      );
    case actionTypes.CHANGE_PAGE_BACK:
      let tempBackArr = [...state.pages];
      tempBackArr.pop();
      tempBackArr.unshift(state.pages[0] - 1);
      return updateObject(
        state,
        {
          pages: tempBackArr,
          offset: (state.offset -= 10),
        },
        () => action.func()
      );
    case actionTypes.GET_GENRES:
      return updateObject(state, {
        genres: action.data.map((obj) => [obj.name, obj.id]),
      });
    case actionTypes.GET_PLATFORMS:
      return updateObject(state, {
        platforms: action.data.map((obj) => [obj.name, obj.id]),
      });
    case actionTypes.FILTER_GAMES:
      return updateObject(state, {
        filteredGames: action.data.map((game) => [game.name, game.summary]),
      });
    case actionTypes.FILTER_GAMES_AND_COVERS:
      return updateObject(state, {
        filteredGames: action.data,
      });
    case actionTypes.GET_ID:
      return updateObject(state, {
        choosedId: action.val,
      });
    default:
      return state;
  }
};

export default reducer;
