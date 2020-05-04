import React, { Component } from "react";
import { connect } from "react-redux";

import { instance } from "../axios";
import * as actionTypes from "../store/actions/actions";
import FilterPanel from "../components/SearchPage/FilterPanel";
import GameItem from "../components/GameItem";
import Pagination from "../components/SearchPage/Pagination";

class SearchPage extends Component {
  state = {
    genres: [],
    platforms: [],
    imagesURL: "//images.igdb.com/igdb/image/upload/t_thumb/",
    searchedGames: [],
  };

  componentDidMount = () => {
    this.getAllGenres();
    this.getAllPlatforms();
  };

  getAllGenres = () => {
    instance("genres", "fields name, id; sort name; limit 50;")
      .then((response) => {
        this.setState({
          genres: response.data.map((obj) => [obj.name, obj.id]),
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  getAllPlatforms = () => {
    instance("platforms", "fields name, id; sort name; limit 200;")
      .then((response) => {
        this.setState({
          platforms: response.data.map((item) => [item.name, item.id]),
        });
      })
      .catch((err) => {
        console.error(err);
      });
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
    instance(
      "games/",
      `fields name, cover;${apiString}; sort rating; limit 10; offset ${this.props.sOffset};`
    )
      .then((response) => {
        console.log(response.data);
        if (response.data.some((game) => !game.cover)) {
          this.setState({
            searchedGames: response.data.map((game) => [
              game.name,
              game.summary,
            ]),
          });
        } else {
          let temporaryDataPreference = response.data
            .sort((a, b) => a.cover - b.cover)
            .map((game) => [game.name, game.cover, game.summary]);
          let temporaryData = response.data
            .map((item) => item.cover)
            .join(", ");
          instance("covers", `fields url; where id=(${temporaryData});`).then(
            (response) => {
              let coversURL = response.data.map((cover) => cover.url);
              for (let i = 0; i < coversURL.length; i++) {
                let hash = coversURL[i].split(this.state.imagesURL);
                temporaryDataPreference[i].push(
                  `https://images.igdb.com/igdb/image/upload/t_cover_big/${hash[1]}`
                );
              }
              this.setState({ searchedGames: temporaryDataPreference });
            }
          );
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    return (
      <main className="SearchPage">
        <FilterPanel
          searchFieldChanged={this.props.onChangeSearchField}
          genres={this.state.genres}
          checkGenre={this.props.onSelectGenres}
          platforms={this.state.platforms}
          checkPlatform={this.props.onSelectPlatforms}
          yearChanged={this.props.onSelectYear}
          ratingChanged={this.props.onSelectRating}
          rating={this.props.sRating}
          popularityChanged={this.props.onSelectPopularity}
          popularity={this.props.sPopularity}
          filter={this.filterGames}
        />
        <div className="SearchPage__container">
          {this.state.searchedGames.map((game, index) => {
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
          changePageForward={this.props.onChangePageForward}
          changePageBackwards={this.props.onChangePageBack}
        >
          {this.state.page}
        </Pagination>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sField: state.searchField,
    sGenres: state.selectedGenres,
    sPlatforms: state.selectedPlatforms,
    sYear: state.selectedYear,
    sRating: state.selectedRating,
    sPopularity: state.selectedPopularity,
    sPages: state.pages,
    sOffset: state.offset,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeSearchField: (e) =>
      dispatch(actionTypes.changeSearchField(e.target.value)),
    onSelectGenres: (e) =>
      dispatch(actionTypes.selectGenres(e.target.value)),
    onSelectPlatforms: (e) =>
      dispatch(actionTypes.selectPlatforms(e.target.value)),
    onSelectYear: (e) => dispatch(actionTypes.selectYear(e.target.value)),
    onSelectRating: (e) =>
      dispatch(actionTypes.selectRating(e.target.value)),
    onSelectPopularity: (e) =>
      dispatch(actionTypes.selectPopularity(e.target.value)),
    onChangePageForward: () => dispatch(actionTypes.changePageForward()),
    onChangePageBack: () => dispatch(actionTypes.changePageBack()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
