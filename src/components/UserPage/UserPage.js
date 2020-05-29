import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/actions";
import { Redirect } from "react-router-dom";

import "./UserPage.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import FoldersSection from "./FoldersSection/FoldersSection";
import Modal from "../UI/Modal/Modal";

class UserPage extends Component {
  state = {
    showInput: false,
    folderName: "",
    folderId: "",
    showFolders: false,
  };

  componentDidMount = async () => {
    await this.props.onGetProfileData(this.props.user.uid);
    await this.props.onGetUserFolders(this.props.user.uid);
    await this.props.onFetchUserRating(this.props.user.uid);
  };

  eventHandler = (event) => {
    this.props.onFetchGamesInFolder(this.props.user.uid, event.target.value);
    this.setState({ folderId: event.target.value });
    this.setState({ showFolders: true });
  };

  addFolderName = async (event) => {
    this.setState({ folderName: event.target.value });
  };

  showFoldersHandler = () => {
    this.setState({ showFolders: !this.state.showFolders });
  };

  showInputHandler = () => {
    this.setState({ showInput: !this.state.showInput });
  };

  render() {
    return (
      <>
        {this.props.error ? (
          <Modal cleanError={this.props.onCleanError}>
            {this.props.error.message}
          </Modal>
        ) : null}
        {!this.props.user ? (
          <Redirect to="/auth" />
        ) : (
          <main className="UserPage">
            <ProfileInfo
              profileData={this.props.profileData}
              uid={this.props.user.uid}
            />
            <FoldersSection
              eventHandler={this.eventHandler}
              showInputHandler={this.showInputHandler}
              showFoldersHandler={this.showFoldersHandler}
              showInput={this.state.showInput}
              addFolderName={this.addFolderName}
              setNewFolder={this.props.onSetNewFolder}
              user={this.props.user.uid}
              folderName={this.state.folderName}
              title={this.props.title}
              deleteFolder={this.props.onDeleteFolder}
              folderId={this.state.folderId}
              getUserFolders={this.props.onGetUserFolders}
              showFolders={this.state.showFolders}
              folders={this.props.folders}
              games={this.props.games}
              addUserRating={this.props.onAddUserRating}
              sendId={this.props.onGetId}
              fetchUserRating={this.props.onFetchUserRating}
              deleteGame={this.props.onDeleteGame}
              ratedGames={this.props.ratedGames}
              addGameToFolder={this.props.onAddGameToFolder}
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
    profileData: state.profileData,
    folders: state.userFolders,
    games: state.folderGames,
    title: state.folderTitle,
    ratedGames: state.ratedGames,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteGame: (userId, folderId, gameId) =>
      dispatch(actionCreators.deleteGame(userId, folderId, gameId)),
    onDeleteFolder: (userId, folderId) =>
      dispatch(actionCreators.deleteFolder(userId, folderId)),
    onAddUserRating: (user, starValue, idGame) =>
      dispatch(actionCreators.addUserRating(user, starValue, idGame)),
    onAddGameToFolder: (gameData, user, idFolder) =>
      dispatch(actionCreators.addGameToFolder(gameData, user, idFolder)),
    onGetProfileData: (user) => dispatch(actionCreators.getProfileData(user)),
    onSetNewFolder: (user, title) =>
      dispatch(actionCreators.setNewFolder(user, title)),
    onFetchGamesInFolder: (user, idFolder) =>
      dispatch(actionCreators.fetchGamesInFolder(user, idFolder)),
    onGetId: (value) => dispatch(actionCreators.getId(value)),
    onFetchUserRating: (user) => dispatch(actionCreators.fetchUserRating(user)),
    onGetUserFolders: (user) => dispatch(actionCreators.getUserFolders(user)),
    onCleanError: () => dispatch(actionCreators.cleanError()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
