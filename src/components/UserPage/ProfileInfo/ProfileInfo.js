import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actionCreators from "../../../store/actions/actions";

import "./ProfileInfo.scss";

class ProfileInfo extends Component {
  componentDidMount() {
    console.log(this.props.user.uid);
    this.props.onGetProfileData(this.props.user.uid);
  }

  render() {
    return (
      <figure className="ProfileInfo">
        <div className="ProfileInfo__photo">
          <img
            src={this.props.user.photoURL}
            alt={this.props.profileData.name}
          />
        </div>
        <figcaption className="ProfileInfo__about">
          <Link to="/profileSettings">
            <p className="ProfileInfo__login">
              Login: {this.props.profileData.name}
            </p>
          </Link>
          <p className="ProfileInfo__email">
            Email: {this.props.profileData.email}
          </p>
        </figcaption>
      </figure>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    profileData: state.profileData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetProfileData: (user) => dispatch(actionCreators.getProfileData(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);
