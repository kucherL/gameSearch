import React from "react";

import Header from "../components/Header";
import RandomGame from "../components/RandomGame";
import GameItem from "../components/GameItem";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <section className="GameItem">
      <Header />
      <RandomGame />
      <GameItem />
      <Footer />
    </section>
  );
};

export default MainPage;
