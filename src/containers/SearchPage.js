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
    checkedPlatform: "",
    years: "",
    rating: "100",
    popularity: "5",
  };

  componentDidMount = () => {
    this.getAllGenres();
    this.getAllPlatforms();
  };

  getAllGenres = () => {
    instance("genres", "fields name, id; sort id; limit 50;")
      .then((response) => {
        this.setState({
          genres: response.data.map((obj) => [obj.name, obj.id]),
        });
        console.log(this.state.genres);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  getAllPlatforms = () => {
    instance("platforms", "fields name, id; sort id; limit 200;")
      .then((response) => {
        this.setState({
          platforms: response.data.map((obj) => [obj.name, obj.id]),
        });
        console.log(this.state.platforms);
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
    console.log(this.state.checkedGenres);
  };

  handleChangedPlatform = (event) => {
    this.setState({
      checkedPlatform: event.target.value,
    });
  };

  handleChangedYear = (event) => {
    this.setState({
      years: event.target.value,
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
    instance(
      "games",
      `fields name, id; where (genre=${this.state.checkedGenres} & platforms=${this.state.checkedPlatform} & release_dates=${this.state.years} & rating>=${this.state.rating} & popularity>=${this.state.popularity}); sort id; limit 500;`
    )
      .then((response) => {
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
