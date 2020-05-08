import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainPage from "./components/MainPage/MainPage";
import SearchPage from "./components/SearchPage/SearchPage";
import SingleGamePage from "./components/SingleGamePage/SingleGamePage";
import UserPage from "./components/UserPage/UserPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Fragment>
            <Route path="/search">
              <SearchPage />
            </Route>
            <Route path="/singlePage">
              <SingleGamePage />
            </Route>
            <Route path="/userPage">
              <UserPage />
            </Route>
            <Route exact path="/">
              <MainPage />
            </Route>
          </Fragment>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
