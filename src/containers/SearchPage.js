import React, { useState, useEffect } from "react";

import { instance } from "../axios";

import FilterPanel from "../components/SearchPage/FilterPanel";
import GameItem from "../components/GameItem";
import Pagination from "../components/SearchPage/Pagination";

const SearchPage = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getAllGenres();
  }, []);
  useEffect(() => () => {}, []);

  const getAllGenres = () => {
    instance("genres", "fields name, url; sort id; limit 50;")
      .then((response) => {
        setGenres(response.data.map((obj) => obj.name));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const filterGames = () => {};

  return (
    <section className="SearchPage">
      <FilterPanel genres={genres} />
      <div className="SearchPage__container">
        <GameItem />
      </div>
      <Pagination />
    </section>
  );
};

export default SearchPage;
