import React, { Component } from "react";
import { connect } from "react-redux";
import { signInWithGoogle, auth, createUserProfile } from "../../firebase";

import "./Auth.scss";
import * as actionCreators from "../../store/actions/actions";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";
import Modal from "../UI/Modal/Modal";

class Auth extends Component {
  state = {
    emailSignIn: "",
    passwordSignIn: "",
    nameSignUp: "",
    emailSignUp: "",
    passwordSignUp: "",
    isSignUp: false,
  };

  componentDidUpdate = (prevState) => {
    if (this.props.user !== prevState.user) {
      this.props.history.push("/userPage");
    }
  };

  changeToSignIn = () => {
    this.setState({ isSignUp: !this.state.isSignUp });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmitSignIn = async (event) => {
    event.preventDefault();
    await auth.signInWithEmailAndPassword(
      this.state.emailSignIn,
      this.state.passwordSignIn
    );
    await this.props.onCheckAuth();
    this.setState({ emailSignIn: "", passwordSignIn: "" });
  };

  handleSignInWithGoogle = async (event) => {
    event.preventDefault();
    signInWithGoogle();
    await this.props.onCheckAuth();
  };

  handleSubmitSignUp = async (event) => {
    event.preventDefault();
    const { emailSignUp, passwordSignUp, nameSignUp } = this.state;
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        emailSignUp,
        passwordSignUp
      );
      createUserProfile(user, nameSignUp);
      this.props.onCheckAuth();
    } catch (error) {
      console.error(error);
    }
    this.setState({ nameSignUp: "", emailSignUp: "", passwordSignUp: "" });
    await this.props.history.push("/userPage");
  };

  render() {
    return (
      <>
        {this.props.error ? (
          <Modal cleanError={this.props.onCleanError}>
            {this.props.error.message}
          </Modal>
        ) : null}
        <main className="Auth">
          <button onClick={this.changeToSignIn}>
            {this.state.isSignUp ? "Change to Sign In" : "Change to Sign Up"}
          </button>
          {this.state.isSignUp ? (
            <SignUp
              handleChange={this.handleChange}
              email={this.state.emailSignUp}
              password={this.state.passwordSignUp}
              name={this.state.nameSignUp}
              handleSubmit={this.handleSubmitSignUp}
            />
          ) : (
            <SignIn
              handleChange={this.handleChange}
              email={this.state.emailSignIn}
              password={this.state.passwordSignIn}
              handleSubmit={this.handleSubmitSignIn}
              click={this.handleSignInWithGoogle}
            />
          )}
        </main>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCheckAuth: () => dispatch(actionCreators.checkAuth()),
    onCleanError: () => dispatch(actionCreators.cleanError()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
