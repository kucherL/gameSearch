import React, { Component } from "react";

import { instance } from "../axios";

import PosterGame from "../components/ui/PosterGame";
import TitleGame from "../components/ui/TitleGame";
import DescriptionGame from "../components/ui/DescriptionGame";
import ToRememberButton from "../components/ui/ToRememberButton";
import AddUsersRating from "../components/ui/AddUsersRating";
import Rating from "../components/ui/Rating";
import Videos from "../components/SingleGamePage/Videos";
import Summary from "../components/SingleGamePage/Summary";
import Alike from "../components/SingleGamePage/Alike";
class SingleGamePage extends Component {
  render() {
    return (
      <main className="SingleGamePage">
        <section className="GameInfo">
          <PosterGame />
          <div className="GameInfo__bottom-block">
            <ToRememberButton />
            <AddUsersRating />
            <TitleGame titleRandomGame="Название" />
            <DescriptionGame summaryGame="Жанры" />
            <Rating>70</Rating>
          </div>
        </section>
        <Videos />
        <Summary />
        <Alike />
      </main>
    );
  }
}

export default SingleGamePage;
