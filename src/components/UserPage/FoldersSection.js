import React, { Component } from "react";
import { connect } from "react-redux";

import GameItem from "../GameItem";
import * as actionCreators from "../../store/actions/actions";

class FoldersSection extends Component {
  state = {
    showInput: false,
    folderName: "",
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
        <select className="FoldersSection__select">
          <option value="">Please choose a folder</option>
          <option value="folder">Folder</option>
        </select>
        <button onClick={this.showInputHandler}>Add new folder</button>
        {this.state.showInput ? (
          <>
            <input type="text" onChange={this.addFolderName} />
            <button onClick={() => this.props.onSetNewFolder(this.props.uid, this.state.folderName)}>Submit</button>
          </>
        ) : null}
        <GameItem />
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    uid: state.user.uid,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSetNewFolder: (user, title) => dispatch(actionCreators.setNewFolder(user, title))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FoldersSection);
