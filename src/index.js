import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import search_reducer from "./store/reducers/search_reducer";
import main_reducer from "./store/reducers/main_reducer";

const rootReducer = combineReducers({
  sRed: search_reducer,
  mRed: main_reducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
