import React, { Component } from "react";
import { connect } from "react-redux";

import "./Auth.scss";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";
import SubmitButton from "../ui/SubmitButton/SubmitButton";
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
      <main className="Auth">
        <SignIn />
        <SignUp />
      </main>
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
