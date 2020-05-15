import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainPage from "./components/MainPage/MainPage";
import SearchPage from "./components/SearchPage/SearchPage";
import SingleGamePage from "./components/SingleGamePage/SingleGamePage";
import Auth from "./components/Auth/Auth";
import UserPage from "./components/UserPage/UserPage";
import ProfileSettings from "./components/UserPage/ProfileSettings/ProfileSettings";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

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
            <Route path="/auth">
              <Auth />
            </Route>
            <Route path="/userPage">
              <UserPage />
            </Route>
            <Route path="/profileSettings">
              <ProfileSettings />
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
