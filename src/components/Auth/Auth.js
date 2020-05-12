import React, { Component } from "react";
import { connect } from "react-redux";

import "./Auth.scss";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import SubmitButton from "../ui/SubmitButton";
import * as actionCreators from "../../store/actions/actions";

class Auth extends Component {
  unsubscribeFormAuth = null;

  componentDidMount = async () => {
    this.props.onCheckAuth();
  };

  // componentWillUnmount = () => {
  //   this.unsubscribeFormAuth();
  // };

  render() {
    return (
      <div className="Auth">
        <SignIn />
        <SignUp />
        <SubmitButton />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCheckAuth: () => dispatch(actionCreators.checkAuth()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
