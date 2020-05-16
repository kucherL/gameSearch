import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as actionCreators from "../../store/actions/actions";
import FilterPanel from "./FilterPanel/FilterPanel";
import GameItem from "../ui/GameItem/GameItem";
import Loader from "../ui/Loader/Loader";
import ArrowButton from "../ui/ArrowButton/ArrowButton";
import "./SearchPage.scss";

class SearchPage extends Component {
  componentDidMount = () => {
    this.props.onGetGenres();
    this.props.onGetPlatforms();
    this.props.onGetUserFolders(this.props.user.uid);
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
        {!this.props.filteredGames[(0, [0])] ? (
          <Loader />
        ) : (
          <section className="SearchPage__filtered-games">
            {this.props.filteredGames.map((game, index) => {
              return (
                <Link
                  to="/singlePage"
                  onClick={() => this.props.onGetId(game[0])}
                  key={index}
                  className="GameItem"
                >
                  <GameItem
                    game={game[0]}
                    description={game[2]}
                    cover={game[3]}
                    id={game[1]}
                    folders={this.props.folders}
                    addGameToFolder={this.props.onAddGameToFolder}
                    uid={this.props.user.uid}
                    addUserRating={this.props.onAddUserRating}
                  />
                </Link>
              );
            })}
          </section>
        )}
        <div className="Pagination">
          <ArrowButton
            click={() => this.props.onChangePageForward(this.filterGames)}
          />
          {this.props.sPages}
          <ArrowButton
            click={() => this.props.onChangePageBack(this.filterGames)}
          />
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    folders: state.userFolders,
    sField: state.searchField,
    sGenres: state.selectedGenres,
    sPlatforms: state.selectedPlatforms,
    sYear: state.selectedYear,
    sRating: state.selectedRating,
    sPopularity: state.selectedPopularity,
    sPages: state.pages,
    sOffset: state.offset,
    genres: state.genres,
    platforms: state.platforms,
    filteredGames: state.filteredGames,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddUserRating: (user, starValue, idGame) =>
      dispatch(actionCreators.addUserRating(user, starValue, idGame)),
    onGetUserFolders: (user) => dispatch(actionCreators.getUserFolders(user)),
    onAddGameToFolder: (gameData, user, idFolder) =>
      dispatch(actionCreators.addGameToFolder(gameData, user, idFolder)),
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
    onGetId: (value) => dispatch(actionCreators.getId(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
