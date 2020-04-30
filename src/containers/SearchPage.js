import React, { Component } from "react";

import { instance } from "../axios";

import FilterPanel from "../components/SearchPage/FilterPanel";
import GameItem from "../components/GameItem";
import Pagination from "../components/SearchPage/Pagination";

class SearchPage extends Component {
  state = {
    genres: [],
  };

  // componentDidMount = () => {
  //   this.getAllGenres();
  // };

  getAllGenres = () => {
    instance("genres", "fields name, url; sort id; limit 50;")
      .then((response) => {
        this.setState({ genres: response.data.map((obj) => obj.name) });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  filterGames = () => {};

  render() {
    return (
      <main className="SearchPage">
        <FilterPanel genres={this.state.genres} />
        <div className="SearchPage__container">
          <GameItem />
        </div>
        <Pagination />
      </main>
    );
  }
}

export default SearchPage;
