import React, { Component } from "react";
import { connect } from "react-redux";

import RandomGame from "./RandomGame/RandomGame";
import PreferenceList from "./PreferenceList/PreferenceList";
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
        <>
          <RandomGame
            idRandomGame={this.props.randomGame.id}
            coverRandomGame={this.props.randomGame.cover}
            titleRandomGame={this.props.randomGame.title}
            summaryGame={this.props.randomGame.summary}
            rating={this.props.randomGame.rating}
            sendId={this.props.onGetId}
          />
          <PreferenceList
            preferenceGames={this.props.preferredGames}
            sendId={this.props.onGetId}
            folders={this.props.folders}
            addGameToFolder={this.props.onAddGameToFolder}
            uid={this.props.user.uid}
            addUserRating={this.props.onAddUserRating}
            getUserFolders={this.props.onGetUserFolders}
          />
        </>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    folders: state.userFolders,
    randomGame: state.randomGame,
    preferredGames: state.preferredGames,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddUserRating: (user, starValue, idGame) =>
      dispatch(actionCreators.addUserRating(user, starValue, idGame)),
    onGetUserFolders: (user) => dispatch(actionCreators.getUserFolders(user)),
    onAddGameToFolder: (gameData, user, idFolder) =>
      dispatch(actionCreators.addGameToFolder(gameData, user, idFolder)),
    onGetRandomGame: (getRandomInt) =>
      dispatch(actionCreators.getRandomGame(getRandomInt)),
    onGetPreferredGames: () => dispatch(actionCreators.getPreferredGames()),
    onGetId: (value) => dispatch(actionCreators.getId(value)),
    onCheckAuth: () => dispatch(actionCreators.checkAuth()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
