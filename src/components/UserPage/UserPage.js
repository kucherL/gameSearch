import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/actions";
import { Redirect } from "react-router-dom";

import "./UserPage.scss";
import GameItem from "../UI/GameItem/GameItem";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import FoldersSection from "./FoldersSection/FoldersSection";
import sprite from "../../assets/sprite.svg";

class UserPage extends Component {
  state = {
    showInput: false,
    folderName: "",
    folderId: "",
  };

  componentDidMount = () => {
    this.props.onGetProfileData(this.props.user.uid);
  };

  eventHandler = (event) => {
    this.props.onFetchGamesInFolder(this.props.user.uid, event.target.value);
    this.setState({ folderId: event.target.value });
  };

  getFoldersList = () => {
    return this.props.folders.map((folder, index) => {
      return (
        <option key={index} value={folder[0]}>
          {folder[1].title}
        </option>
      );
    });
  };

  getListOfGames = () => {
    return this.props.games.map((game) => {
      return (
        <div key={game.gameData.id}>
          <GameItem
            game={game.gameData.title}
            genres={game.gameData.genres}
            platforms={game.gameData.platforms}
            cover={game.gameData.cover}
            id={game.gameData.id}
            folders={this.props.folders}
            addGameToFolder={this.props.onAddGameToFolder}
            uid={this.props.user.uid}
            addUserRating={this.props.onAddUserRating}
            sendId={this.props.onGetId}
            ratedGames={this.props.ratedGames}
            fetchUserRating={this.props.onFetchUserRating}
          />
          <button
            onClick={() =>
              this.props.OnDeleteGame(
                this.props.user.uid,
                this.state.folderId,
                game[0]
              )
            }
          >
            <svg>
              <use href={sprite + "#icon-trashcan"} />
            </svg>
          </button>
        </div>
      );
    });
  };

  addFolderName = async (event) => {
    this.setState({ folderName: event.target.value });
  };

  showInputHandler = () => {
    this.setState({ showInput: !this.state.showInput });
  };

  render() {
    return (
      <>
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
              getFoldersList={this.getFoldersList}
              showInputHandler={this.showInputHandler}
              showInput={this.state.showInput}
              addFolderName={this.addFolderName}
              setNewFolder={this.props.onSetNewFolder}
              user={this.props.user.uid}
              folderName={this.state.folderName}
              getListOfGames={this.getListOfGames}
              title={this.props.title}
              deleteFolder={this.props.onDeleteFolder}
              folderId={this.state.folderId}
              getUserFolders={this.props.onGetUserFolders}
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
