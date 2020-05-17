import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import sprite from "../../assets/sprite.svg";
import * as actionCreators from "../../store/actions/actions";
import FilterPanel from "./FilterPanel/FilterPanel";
import GameItem from "../ui/GameItem/GameItem";
import "./SearchPage.scss";

class SearchPage extends Component {
  state = {
    searchField: "",
    selectedGenres: "",
    selectedPlatforms: "",
    selectedYear: "",
    selectedRating: "80",
    selectedPopularity: "4",
    page: 1,
    offset: 0,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  changePage = (event) => {
    const name = event.target.getAttribute("name");
    if (name === "forward") {
      this.setState({
        page: this.state.page + 1,
        offset: this.state.offset + 10,
      });
    } else {
      this.setState({
        page: this.state.page - 1,
        offset: this.state.offset - 10,
      });
    }
    this.filterGames();
  };

  filterGames = () => {
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
      if (this.state.selectedYear.length !== 0) {
        apiString += ` & release_dates=(${this.state.selectedYear})`;
      }
    }
    this.props.onFilterGames(apiString, this.state.offset);
  };

  render() {
    return (
      <main className="SearchPage">
        <FilterPanel
          genres={this.props.genres}
          platforms={this.props.platforms}
          rating={this.state.selectedRating}
          popularity={this.state.selectedPopularity}
          handleChange={this.handleChange}
          filter={this.filterGames}
        />
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
        <div className="Pagination">
          {this.state.page === 1 ? (
            <button disabled>
              <svg name="back">
                <use href={sprite + "#icon-arrow-right"} />
              </svg>
            </button>
          ) : (
            <button onClick={this.changePage}>
              <svg name="back">
                <use href={sprite + "#icon-arrow-right"} />
              </svg>
            </button>
          )}
          {this.state.page}
          <button onClick={this.changePage}>
            <svg name="forward">
              <use href={sprite + "#icon-arrow-right"} />
            </svg>
          </button>
        </div>
      </main>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddUserRating: (user, starValue, idGame) =>
      dispatch(actionCreators.addUserRating(user, starValue, idGame)),
    onGetUserFolders: (user) => dispatch(actionCreators.getUserFolders(user)),
    onAddGameToFolder: (gameData, user, idFolder) =>
      dispatch(actionCreators.addGameToFolder(gameData, user, idFolder)),
    onFilterGames: (apiString, offset) =>
      dispatch(actionCreators.filterGames(apiString, offset)),
    onGetId: (value) => dispatch(actionCreators.getId(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
