import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import GameItem from "../GameItem";
import * as actionCreators from "../../store/actions/actions";

class FoldersSection extends Component {
  state = {
    showInput: false,
    folderName: "",
  };

  componentDidMount = () => {
    this.props.onGetUserFolders(this.props.uid);
  };

  eventHandler = (event) => {
    this.props.onFetchGamesInFolder(this.props.uid, event.target.value);
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
      <section className="FoldersSection">
        <select className="FoldersSection__select" onChange={this.eventHandler}>
          <option value="">Please choose a folder</option>
          {this.getFoldersList()}
        </select>
        <button onClick={this.showInputHandler}>Add new folder</button>
        {this.state.showInput ? (
          <>
            <input type="text" onChange={this.addFolderName} />
            <button
              onClick={() =>
                this.props.onSetNewFolder(this.props.uid, this.state.folderName)
              }
            >
              Submit
            </button>
          </>
        ) : null}
        {this.getListOfGames()}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    uid: state.user.uid,
    folders: state.userFolders,
    games: state.folderGames,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSetNewFolder: (user, title) =>
      dispatch(actionCreators.setNewFolder(user, title)),
    onGetUserFolders: (user) => dispatch(actionCreators.getUserFolders(user)),
    onFetchGamesInFolder: (user, idFolder) =>
      dispatch(actionCreators.fetchGamesInFolder(user, idFolder)),
    onGetId: (value) => dispatch(actionCreators.getId(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FoldersSection);
