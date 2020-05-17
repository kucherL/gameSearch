import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Auth from "./components/Auth/Auth";
import ProfileSettings from "./components/UserPage/ProfileSettings/ProfileSettings";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Loader from "./components/ui/Loader/Loader";

const MainPage = React.lazy(() => {
  return import("./components/MainPage/MainPage");
});

const SearchPage = React.lazy(() => {
  return import("./components/SearchPage/SearchPage");
});

const SingleGamePage = React.lazy(() => {
  return import("./components/SingleGamePage/SingleGamePage");
});

const UserPage = React.lazy(() => {
  return import("./components/UserPage/UserPage");
});

const App = () => {
  let routes = (
    <Switch>
      <Route path="/search" render={(props) => <SearchPage {...props} />} />
      <Route
        path="/singlePage"
        render={(props) => <SingleGamePage {...props} />}
      />
      <Route path="/auth" component={Auth} />
      <Route path="/userPage" render={(props) => <UserPage {...props} />} />
      <Route path="/profileSettings" component={ProfileSettings} />
      <Route path="/" render={(props) => <MainPage {...props} />} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div className="App">
      <Router>
        <Header />
        <Suspense fallback={<Loader />}>{routes}</Suspense>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
