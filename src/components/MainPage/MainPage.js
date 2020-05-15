import React, { Component } from "react";
import { connect } from "react-redux";

import RandomGame from "./RandomGame/RandomGame";
import PreferenceList from "./PreferenceList/PreferenceList";
import Loader from "../ui/Loader/Loader";
import * as actionCreators from "../../store/actions/actions";
import "./MainPage.scss";

class MainPage extends Component {
  componentDidMount = () => {
    this.props.onGetRandomGame(this.getRandomInt);
    this.props.onGetPreferredGames();
    this.props.onCheckAuth();
  };

  getRandomInt = (arr) => {
    const min = 0;
    const max = arr.length;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  render() {
    return (
      <main className="MainPage">
        {!this.props.randCover ? (
          <Loader />
        ) : (
          <>
            <RandomGame
              idRandomGame={this.props.randId}
              coverRandomGame={this.props.randCover}
              titleRandomGame={this.props.randTitle}
              summaryGame={this.props.randSummary}
              sendId={this.props.onGetId}
            />
            <PreferenceList
              preferenceGames={this.props.preferredGames}
              sendId={this.props.onGetId}
            />
          </>
        )}
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    randId: state.randomGameId,
    randTitle: state.randomGameTitle,
    randSummary: state.randomGameSummary,
    randCover: state.randomGameCover,
    preferredGames: state.preferredGames,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetRandomGame: (getRandomInt) =>
      dispatch(actionCreators.getRandomGame(getRandomInt)),
    onGetPreferredGames: () => dispatch(actionCreators.getPreferredGames()),
    onGetId: (value) => dispatch(actionCreators.getId(value)),
    onCheckAuth: () => dispatch(actionCreators.checkAuth()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
