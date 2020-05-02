import React, { Component } from "react";

import { instance } from "../axios";

import FilterPanel from "../components/SearchPage/FilterPanel";
import GameItem from "../components/GameItem";
import Pagination from "../components/SearchPage/Pagination";

class SearchPage extends Component {
  state = {
    genres: [],
    checkedGenres: [],
    platforms: [],
    checkedPlatforms: "",
    years: "",
    checkedYears: "",
    rating: "80",
    popularity: "4",
  };

  componentDidMount = () => {
    this.getAllGenres();
    this.getAllPlatforms();
  };

  componentDidUpdate = () => {
    console.log(this.state.apiString);
  };

  getAllGenres = () => {
    instance("genres", "fields name, id; sort id; limit 50;")
      .then((response) => {
        this.setState(
          {
            genres: response.data.map((obj) => [obj.name, obj.id]),
          },
          () => {
            console.log(this.state.genres);
          }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  };

  getAllPlatforms = () => {
    instance("platforms", "fields name, id; sort id; limit 200;")
      .then((response) => {
        this.setState(
          {
            platforms: response.data.map((obj) => [obj.name, obj.id]),
          },
          () => {
            console.log(this.state.platforms);
          }
        );
      })
      .catch((err) => {
        console.error(err);
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
  };

  handleChangedPlatform = (event) => {
    this.setState({
      checkedPlatforms: event.target.value,
    });
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

  filterGames = () => {
    let apiString = `rating >= ${this.state.rating} & popularity >= ${this.state.popularity}`;
    if (this.state.checkedGenres.length !== 0) {
      apiString += ` & genres=${this.state.checkedGenres}`;
    }
    if (this.state.checkedPlatforms.length !== 0) {
      apiString += ` & platforms=${this.state.checkedPlatforms}`;
    }
    if (this.state.checkedYears.length !== 0) {
      apiString += ` & release_dates=${this.state.checkedYears}`;
    }
    instance(
      "games/",
      `fields name, id; where (${apiString}); sort rating; limit 10;`
    )
      .then((response) => {
        console.log(apiString);
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    return (
      <main className="SearchPage">
        <FilterPanel
          genres={this.state.genres}
          clicked={this.handleCheckedGenre}
          platformChanged={this.handleChangedPlatform}
          yearChanged={this.handleChangedYear}
          ratingChanged={this.handleChangedRating}
          rating={this.state.rating}
          popularityChanged={this.handleChangedPopularity}
          popularity={this.state.popularity}
          filter={this.filterGames}
        />
        <div className="SearchPage__container">
          <GameItem />
        </div>
        <Pagination />
      </main>
    );
  }
}

export default SearchPage;
