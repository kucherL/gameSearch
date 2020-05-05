import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionCreators from "../store/actions/search_actions";
import FilterPanel from "../components/SearchPage/FilterPanel";
import GameItem from "../components/GameItem";
import Pagination from "../components/SearchPage/Pagination";

class SearchPage extends Component {
  componentDidMount = () => {
    this.props.onGetGenres();
    this.props.onGetPlatforms();
  };

  filterGames = () => {
    let apiString = "";
    if (this.props.sField.length > 0) {
      apiString = ` search "${this.props.sField}";`;
    } else {
      apiString = ` where rating>=${this.props.sRating} & popularity>=${this.props.sPopularity}`;
      if (this.props.sGenres.length !== 0) {
        apiString += ` & genres=(${this.props.sGenres})`;
      }
      if (this.props.sPlatforms.length !== 0) {
        apiString += ` & platforms=(${this.props.sPlatforms})`;
      }
      if (this.props.sYear.length !== 0) {
        apiString += ` & release_dates=(${this.props.sYear})`;
      }
    }
    this.props.onFilterGames(apiString, this.props.sOffset);
  };

  render() {
    return (
      <main className="SearchPage">
        <FilterPanel
          searchFieldChanged={this.props.onChangeSearchField}
          genres={this.props.genres}
          checkGenre={this.props.onSelectGenres}
          platforms={this.props.platforms}
          checkPlatform={this.props.onSelectPlatforms}
          yearChanged={this.props.onSelectYear}
          ratingChanged={this.props.onSelectRating}
          rating={this.props.sRating}
          popularityChanged={this.props.onSelectPopularity}
          popularity={this.props.sPopularity}
          filter={this.filterGames}
        />
        <div className="SearchPage__container">
          {this.props.filteredGames.map((game, index) => {
            return (
              <GameItem
                game={game[0]}
                summary={game[2]}
                cover={game[3]}
                key={index}
              />
            );
          })}
        </div>
        <Pagination
          changePageForward={() =>
            this.props.onChangePageForward(this.filterGames)
          }
          changePageBackwards={() =>
            this.props.onChangePageBack(this.filterGames)
          }
        >
          {this.props.sPages}
        </Pagination>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sField: state.sRed.searchField,
    sGenres: state.sRed.selectedGenres,
    sPlatforms: state.sRed.selectedPlatforms,
    sYear: state.sRed.selectedYear,
    sRating: state.sRed.selectedRating,
    sPopularity: state.sRed.selectedPopularity,
    sPages: state.sRed.pages,
    sOffset: state.sRed.offset,
    genres: state.sRed.genres,
    platforms: state.sRed.platforms,
    filteredGames: state.sRed.filteredGames,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeSearchField: (e) =>
      dispatch(actionCreators.changeSearchField(e.target.value)),
    onSelectGenres: (e) =>
      dispatch(actionCreators.selectGenres(e.target.value)),
    onSelectPlatforms: (e) =>
      dispatch(actionCreators.selectPlatforms(e.target.value)),
    onSelectYear: (e) => dispatch(actionCreators.selectYear(e.target.value)),
    onSelectRating: (e) =>
      dispatch(actionCreators.selectRating(e.target.value)),
    onSelectPopularity: (e) =>
      dispatch(actionCreators.selectPopularity(e.target.value)),
    onChangePageForward: (filter) =>
      dispatch(actionCreators.changePageForward(filter)),
    onChangePageBack: (filter) =>
      dispatch(actionCreators.changePageBack(filter)),
    onGetGenres: () => dispatch(actionCreators.getGenres()),
    onGetPlatforms: () => dispatch(actionCreators.getPlatforms()),
    onFilterGames: (apiString, offset) =>
      dispatch(actionCreators.filterGames(apiString, offset)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
