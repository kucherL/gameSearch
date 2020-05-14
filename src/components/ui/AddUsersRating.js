import React, { Component } from "react";
import { connect } from "react-redux";

import StarButton from "./StarButton";
import "./UiItems.scss";
import * as actionCreators from "../../store/actions/actions";

class AddUserRating extends Component {
  starButtonsList = () => {
    const arr = [1, 2, 3, 4, 5];
    return arr.map((value) => {
      return (
        <StarButton
          value={value}
          key={value}
          idGame={this.props.idGame}
          click={() =>
            this.props.onAddUserRating(
              this.props.user,
              value,
              this.props.idGame
            )
          }
        />
      );
    });
  };

  render = () => {
    return <div className="AddUserRating">{this.starButtonsList()}</div>;
  };
}

const mapStateToProps = (state) => {
  return {
    user: state.user.uid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddUserRating: (user, starValue, idGame) =>
      dispatch(actionCreators.addUserRating(user, starValue, idGame)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUserRating);
