import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/actions";

import "./UserPage.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import FoldersSection from "./FoldersSection/FoldersSection";

class UserPage extends Component {
  state = {
    showInput: false,
    folderName: "",
  };

  componentDidMount() {
    this.props.onGetProfileData(this.props.user.uid);
    this.props.onGetUserFolders(this.props.uid);
  }

  eventHandler = (event) => {
    this.props.onFetchGamesInFolder(this.props.user.uid, event.target.value);
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
    return this.props.games.map((game, index) => {
      return (
        <Link
          to="/singlePage"
          onClick={() => this.props.onGetId(game[0])}
          key={index}
          className="GameItem"
        >
          <GameItem
            game={game.gameData[2]}
            description={game.gameData[3]}
            cover={game.gameData[1]}
            id={game.gameData[0]}
          />
        </Link>
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
      <main className="UserPage">
        <ProfileInfo profileData={this.props.profileData} />
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
        />
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    profileData: state.profileData,
    folders: state.userFolders,
    games: state.folderGames,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetProfileData: (user) => dispatch(actionCreators.getProfileData(user)),
    onSetNewFolder: (user, title) =>
      dispatch(actionCreators.setNewFolder(user, title)),
    onGetUserFolders: (user) => dispatch(actionCreators.getUserFolders(user)),
    onFetchGamesInFolder: (user, idFolder) =>
      dispatch(actionCreators.fetchGamesInFolder(user, idFolder)),
    onGetId: (value) => dispatch(actionCreators.getId(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
