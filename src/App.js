import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { spring, AnimatedSwitch } from "react-router-transition";

import Auth from "./components/Auth/Auth";
import Loader from "./components/UI/Loader/Loader";

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
  const slide = (val) => {
    return spring(val, {
      stiffness: 125,
      damping: 16,
    });
  };

  let routes = (
    <AnimatedSwitch
      atEnter={{ offset: 100 }}
      atLeave={{
        offset: slide(-150),
      }}
      atActive={{
        offset: slide(0),
      }}
      mapStyles={(styles) => ({
        transform: `translateX(${styles.offset}%)`,
      })}
      className="switch-wrapper"
    >
      <Route path="/search" render={(props) => <SearchPage {...props} />} />
      <Route
        path="/game/:id"
        render={(props) => <SingleGamePage {...props} />}
      />
      <Route path="/auth" component={Auth} />
      <Route path="/userPage" render={(props) => <UserPage {...props} />} />
      <Route path="/" render={(props) => <MainPage {...props} />} />
      <Redirect to="/" />
    </AnimatedSwitch>
  );

  return (
    <div className="App">
      <Router>
        <Suspense fallback={<Loader />}>{routes}</Suspense>
      </Router>
    </div>
  );
};

export default App;
