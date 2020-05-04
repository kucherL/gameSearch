import React, { Component } from "react";

import { instance } from "../axios";

import RandomGame from "../components/MainPage/RandomGame";
import PreferenceGames from "../components/MainPage/PreferenceGames";

class MainPage extends Component {
  state = {
    imagesURL: "//images.igdb.com/igdb/image/upload/t_thumb/",
    cover: "",
    title: "",
    summary: "",
    preferenceGames: [],
  };

  componentDidMount = () => {
    this.getRandomPopularGame();
    this.getPreferenceGames();
  };

  getRandomPopularGame = () => {
    instance(
      "games/",
      "fields name, id, summary; where (rating > 95 & popularity > 4); sort popularity; limit 100;"
    )
      .then((response) => {
        let randomInt = this.getRandomInt(response.data);
        let randomGameId = 0;
        randomGameId = response.data[randomInt].id;
        this.setState({ title: response.data[randomInt].name, summary: response.data[randomInt].summary });
        instance("covers", `fields url; where game=${randomGameId};`).then(
          (response) => {
            let hash = response.data[0].url.split(this.state.imagesURL);
            this.setState({
              cover: `https://images.igdb.com/igdb/image/upload/t_cover_big/${hash[1]}`,
            });
          }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  };

  getPreferenceGames = () => {
    instance(
      "games/",
      "fields name, cover, summary; where (rating > 95 & popularity > 4); sort rating;"
    ).then((response) => {
      let temporaryDataPreference = response.data
        .sort((a, b) => a.cover - b.cover)
        .map((game) => [game.name, game.cover, game.summary]);
      let temporaryData = response.data.map((item) => item.cover).join(", ");
      instance("covers", `fields url; where id=(${temporaryData});`).then(
        (response) => {
          let coversURL = response.data.map((cover) => cover.url);
          for (let i = 0; i < coversURL.length; i++) {
            let hash = coversURL[i].split(this.state.imagesURL);
            temporaryDataPreference[i].push(
              `https://images.igdb.com/igdb/image/upload/t_cover_big/${hash[1]}`
            );
          }
          this.setState({ preferenceGames: temporaryDataPreference });
        }
      );
    });
  };

  getRandomInt = (arr) => {
    const min = 0;
    const max = arr.length;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  render() {
    return (
      <main className="MainPage">
        <RandomGame
          coverRandomGame={this.state.cover}
          titleRandomGame={this.state.title}
          summaryGame={this.state.summary}
        />
        <PreferenceGames preferenceGames={this.state.preferenceGames} />
      </main>
    );
  }
}

export default MainPage;
