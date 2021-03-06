import React, { Component } from "react";
import { connect } from "react-redux";

import Modal from "../UI/Modal/Modal";
import RandomGame from "./RandomGame/RandomGame";
import PreferenceList from "./PreferenceList/PreferenceList";
import Loader from "../UI/Loader/Loader";
import * as actionCreators from "../../store/actions/actions";
import "./MainPage.scss";

class MainPage extends Component {
  componentDidMount = async () => {
    await this.props.onCheckAuth();
    await this.props.onGetRandomGame(this.getRandomInt);
    await this.props.onGetPreferredGames();
    if (this.props.user) {
      await this.props.onGetUserFolders(this.props.user.uid);
      await this.props.onFetchUserRating(this.props.user.uid);
    }
  };

  componentWillUnmount = () => {
    this.props.onCleanRandomGame();
  };

  getRandomInt = (arr) => {
    const min = 0;
    const max = arr.length;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  render() {
    return (
      <>
        {this.props.error ? (
          <Modal cleanError={this.props.onCleanError}>
            {this.props.error.message}
          </Modal>
        ) : null}
        {!this.props.randomGame.cover ? (
          <Loader />
        ) : (
          <main className="MainPage">
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
              ratedGames={this.props.ratedGames}
              fetchUserRating={this.props.onFetchUserRating}
            />
          </main>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    folders: state.userFolders,
    randomGame: state.randomGame,
    preferredGames: state.preferredGames,
    ratedGames: state.ratedGames,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCleanRandomGame: () => dispatch(actionCreators.cleanRandomGame()),
    onCheckAuth: () => dispatch(actionCreators.checkAuth()),
    onAddUserRating: (user, starValue, idGame) =>
      dispatch(actionCreators.addUserRating(user, starValue, idGame)),
    onGetUserFolders: (user) => dispatch(actionCreators.getUserFolders(user)),
    onAddGameToFolder: (gameData, user, idFolder) =>
      dispatch(actionCreators.addGameToFolder(gameData, user, idFolder)),
    onGetRandomGame: (getRandomInt) =>
      dispatch(actionCreators.getRandomGame(getRandomInt)),
    onGetPreferredGames: () => dispatch(actionCreators.getPreferredGames()),
    onGetId: (value) => dispatch(actionCreators.getId(value)),
    onFetchUserRating: (user) => dispatch(actionCreators.fetchUserRating(user)),
    onCleanError: () => dispatch(actionCreators.cleanError()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
