import React, { Component } from "react";

import { instance } from "../axios";

import FilterPanel from "../components/SearchPage/FilterPanel";
import GameItem from "../components/GameItem";
import Pagination from "../components/SearchPage/Pagination";

class SearchPage extends Component {
  state = {
    searchField: "",
    genres: [],
    checkedGenres: [],
    platforms: [],
    checkedPlatforms: [],
    years: "",
    checkedYears: "",
    rating: "80",
    popularity: "4",
    imagesURL: "//images.igdb.com/igdb/image/upload/t_thumb/",
    searchedGames: [],
    page: [1, 2, 3],
    offset: 0,
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

  handleSearchField = (event) => {
    this.setState({
      searchField: event.target.value,
    });
  };

  handleCheckedGenre = (event) => {
    if (this.state.checkedGenres.includes(event.target.value)) {
      this.setState({
        checkedGenres: this.state.checkedGenres.filter(
          (item) => item !== event.target.value
        ),
      });
    } else {
      this.setState({
        checkedGenres: this.state.checkedGenres.concat(event.target.value),
      });
    }
    console.log(this.state.checkedGenres);
  };

  handleChangedPlatform = (event) => {
    if (this.state.checkedPlatforms.includes(event.target.value)) {
      this.setState({
        checkedPlatforms: this.state.checkedPlatforms.filter(
          (item) => item !== event.target.value
        ),
      });
    } else {
      this.setState({
        checkedPlatforms: this.state.checkedPlatforms.concat(
          event.target.value
        ),
      });
    }
    console.log(this.state.checkedGenres);
  };

  handleChangedYear = (event) => {
    this.setState({
      checkedYears: event.target.value,
    });
  };

  handleChangedRating = (event) => {
    this.setState({
      rating: event.target.value,
    });
  };

  handleChangedPopularity = (event) => {
    this.setState({
      popularity: event.target.value,
    });
  };

  handlePaginationForward = () => {
    let tempArr = [...this.state.page];
    let shifted = tempArr.shift();
    let pushed = tempArr.push(this.state.page[2] + 1);
    this.setState(
      {
        page: tempArr,
        offset: (this.state.offset += 10),
      },
      () => this.filterGames()
    );
  };

  handlePaginationBackwards = () => {
    let tempArr = [...this.state.page];
    let popped = tempArr.pop();
    let unshifted = tempArr.unshift(this.state.page[0] - 1);
    this.setState(
      {
        page: tempArr,
        offset: (this.state.offset -= 10),
      },
      () => this.filterGames()
    );
  };

  filterGames = () => {
    console.log(this.state.offset);
    let apiString = "";
    if (this.state.searchField.length > 0) {
      apiString = ` search "${this.state.searchField}";`;
    } else {
      apiString = ` where rating>=${this.state.rating} & popularity>=${this.state.popularity}`;
      if (this.state.checkedGenres.length !== 0) {
        apiString += ` & genres=(${this.state.checkedGenres})`;
      }
      if (this.state.checkedPlatforms.length !== 0) {
        apiString += ` & platforms=(${this.state.checkedPlatforms})`;
      }
      if (this.state.checkedYears.length !== 0) {
        apiString += ` & release_dates=(${this.state.checkedYears})`;
      }
    }
    instance(
      "games/",
      `fields name, cover;${apiString}; sort rating; limit 10; offset ${this.state.offset};`
    )
      .then((response) => {
        console.log(response.data);
        if (response.data.some(game => !game.cover)) {
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
          searchFieldChanged={this.handleSearchField}
          genres={this.state.genres}
          checkGenre={this.handleCheckedGenre}
          platforms={this.state.platforms}
          checkPlatform={this.handleChangedPlatform}
          yearChanged={this.handleChangedYear}
          ratingChanged={this.handleChangedRating}
          rating={this.state.rating}
          popularityChanged={this.handleChangedPopularity}
          popularity={this.state.popularity}
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
          changePageForward={this.handlePaginationForward}
          changePageBackwards={this.handlePaginationBackwards}
        >
          {this.state.page}
        </Pagination>
      </main>
    );
  }
}

export default SearchPage;
