import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/actions";

import "./ToRememberButton.scss";

class ToRememberButton extends Component {
  state = {
    showFolders: false,
  };

  foldersHandler = () => {
    this.setState({ showFolders: !this.state.showFolders });
  };

  eventHandler = (event) => {
    const gameData = [
      this.props.idGame,
      this.props.cover,
      this.props.title,
      this.props.summary,
    ];
    this.props.onAddGameToFolder(gameData, this.props.uid, event.target.value);
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

  render = () => {
    return (
      <button className="ToRememberButton" onClick={this.foldersHandler}>
        <FontAwesomeIcon icon={faGamepad} size={"2x"} />
        {this.state.showFolders ? (
          <select
            className="FoldersSection__select"
            onChange={this.eventHandler}
          >
            <option value="">Please choose a folder</option>
            {this.getFoldersList()}
          </select>
        ) : null}
      </button>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    uid: state.user.uid,
    folders: state.userFolders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetUserFolders: (user) => dispatch(actionCreators.getUserFolders(user)),
    onAddGameToFolder: (gameData, user, idFolder) =>
      dispatch(actionCreators.addGameToFolder(gameData, user, idFolder)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToRememberButton);
