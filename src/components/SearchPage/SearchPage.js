import React, { Component } from "react";
import { connect } from "react-redux";

import sprite from "../../assets/sprite.svg";
import * as actionCreators from "../../store/actions/actions";
import FilterPanel from "./FilterPanel/FilterPanel";
import GameItem from "../UI/GameItem/GameItem";
import Loader from "../UI/Loader/Loader";
import Modal from "../UI/Modal/Modal";
import "./SearchPage.scss";

class SearchPage extends Component {
  state = {
    searchField: "",
    selectedGenres: "",
    selectedPlatforms: "",
    selectedYear: "",
    selectedRating: "80",
    selectedPopularity: "4",
    loading: false,
    pagination: false,
  };

  page = 1;
  offset = 0;

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  changePage = (event) => {
    const name = event.target.getAttribute("name");
    if (name === "forward") {
      this.page += 1;
      this.offset += 10;
    }
    if (name === "back") {
      this.page -= 1;
      this.offset -= 10;
    }
    this.handleChangePage();
  };

  filterGames = (event) => {
    event.preventDefault();
    this.setState({ pagination: true });
    this.handleChangePage();
  };

  handleChangePage = () => {
    this.setState({ loading: true });
    let apiString = "";
    if (this.state.searchField.length > 0) {
      apiString = ` search "${this.state.searchField}";`;
    } else {
      apiString = ` where rating>=${this.state.selectedRating} & popularity>=${this.state.selectedPopularity}`;
      if (this.state.selectedGenres.length !== 0) {
        apiString += ` & genres=(${this.state.selectedGenres})`;
      }
      if (this.state.selectedPlatforms.length !== 0) {
        apiString += ` & platforms=(${this.state.selectedPlatforms})`;
      }
      // TODO: delete or change request
      // if (this.state.selectedYear.length !== 0) {
      //   apiString += ` & release_dates=(${this.state.selectedYear})`;
      // }
    }
    this.props.onFilterGamesAndCovers(apiString, this.offset);
    this.setState({ loading: false });
  };

  render() {
    return (
      <>
        {this.props.error ? (
          <Modal cleanError={this.props.onCleanError}>
            {this.props.error.message}
          </Modal>
        ) : null}
        <main className="SearchPage">
          <FilterPanel
            genres={this.props.genres}
            platforms={this.props.platforms}
            rating={this.state.selectedRating}
            popularity={this.state.selectedPopularity}
            handleChange={this.handleChange}
            filter={this.filterGames}
          />
          {this.state.loading ? (
            <Loader />
          ) : (
            <section className="SearchPage__filtered-games">
              {this.props.filteredGames.map((game, index) => {
                return (
                  <GameItem
                    key={index}
                    game={game[1]}
                    genres={game[3]}
                    platforms={game[4]}
                    cover={game[5]}
                    id={game[0]}
                    folders={this.props.folders}
                    addGameToFolder={this.props.onAddGameToFolder}
                    uid={this.props.user.uid}
                    addUserRating={this.props.onAddUserRating}
                    getUserFolders={this.props.onGetUserFolders}
                    sendId={this.props.onGetId}
                    ratedGames={this.props.ratedGames}
                    fetchUserRating={this.props.onFetchUserRating}
                  />
                );
              })}
            </section>
          )}
          {this.state.pagination ? (
            <div className="Pagination">
              {this.page === 1 ? (
                <button disabled>
                  <svg>
                    <use href={sprite + "#icon-arrow-left"} name="back" />
                  </svg>
                </button>
              ) : (
                <button onClick={this.changePage}>
                  <svg>
                    <use href={sprite + "#icon-arrow-left"} name="back" />
                  </svg>
                </button>
              )}
              {this.page}
              {this.props.filteredGames.length < 12 ? (
                <button disabled>
                  <svg>
                    <use href={sprite + "#icon-arrow-right"} name="forward" />
                  </svg>
                </button>
              ) : (
                <button onClick={this.changePage}>
                  <svg>
                    <use href={sprite + "#icon-arrow-right"} name="forward" />
                  </svg>
                </button>
              )}
            </div>
          ) : null}
        </main>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    folders: state.userFolders,
    genres: state.genres,
    platforms: state.platforms,
    filteredGames: state.filteredGames,
    ratedGames: state.ratedGames,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddUserRating: (user, starValue, idGame) =>
      dispatch(actionCreators.addUserRating(user, starValue, idGame)),
    onGetUserFolders: (user) => dispatch(actionCreators.getUserFolders(user)),
    onAddGameToFolder: (gameData, user, idFolder) =>
      dispatch(actionCreators.addGameToFolder(gameData, user, idFolder)),
    onFilterGamesAndCovers: (apiString, offset) =>
      dispatch(actionCreators.filterGamesAndCovers(apiString, offset)),
    onGetId: (value) => dispatch(actionCreators.getId(value)),
    onFetchUserRating: (user) => dispatch(actionCreators.fetchUserRating(user)),
    onCleanError: () => dispatch(actionCreators.cleanError()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
