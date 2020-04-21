import React from "react";

import Header from "../components/Header";
import RandomGame from "../components/RandomGame";
import GameItems from "../components/GameItems";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <section className="MainPage">
      <Header />
      <RandomGame />
      <GameItems />
      <Footer />
    </section>
  );
};

export default MainPage;
