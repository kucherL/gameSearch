import React, { Component } from "react";
import { connect } from "react-redux";

import RandomGame from "../components/MainPage/RandomGame";
import PreferenceGames from "../components/MainPage/PreferenceGames";
import * as actionCreators from "../store/actions/main_actions";

class MainPage extends Component {
  componentDidMount = () => {
    this.props.onGetRandomGame(this.getRandomInt);
    this.props.onGetPreferredGames();
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
          idRandomGame={this.props.randId}
          coverRandomGame={this.props.randCover}
          titleRandomGame={this.props.randTitle}
          summaryGame={this.props.randSummary}
        />
        <PreferenceGames preferenceGames={this.props.preferredGames} />
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    randId: state.mRed.randomGameId,
    randTitle: state.mRed.randomGameTitle,
    randSummary: state.mRed.randomGameSummary,
    randCover: state.mRed.randomGameCover,
    preferredGames: state.mRed.preferredGames,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetRandomGame: (getRandomInt) =>
      dispatch(actionCreators.getRandomGame(getRandomInt)),
    onGetPreferredGames: () => dispatch(actionCreators.getPreferredGames()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
