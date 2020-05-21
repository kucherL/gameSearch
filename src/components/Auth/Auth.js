import React, { Component } from "react";
import { connect } from "react-redux";
import { signInWithGoogle, auth, createUserProfile } from "../../firebase";

import "./Auth.scss";
import * as actionCreators from "../../store/actions/actions";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";

class Auth extends Component {
  state = {
    emailSignIn: "",
    passwordSignIn: "",
    nameSignUp: "",
    emailSignUp: "",
    passwordSignUp: "",
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
    await this.props.onGetUserFolders(this.props.user.uid);
    await this.props.onFetchUserRating(this.props.user.uid);
    this.setState({ emailSignIn: "", passwordSignIn: "" });
  };

  handleSignInWithGoogle = async () => {
    signInWithGoogle();
    await this.props.onCheckAuth();
    console.log(this.props.user.uid);
    await this.props.onGetUserFolders(this.props.user.uid);
    await this.props.onFetchUserRating(this.props.user.uid);
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
  };

  render() {
    return (
      <main className="Auth">
        <SignIn
          handleChange={this.handleChange}
          email={this.state.emailSignIn}
          password={this.state.passwordSignIn}
          handleSubmit={this.handleSubmitSignIn}
          click={this.handleSignInWithGoogle}
        />
        <SignUp
          handleChange={this.handleChange}
          email={this.state.emailSignUp}
          password={this.state.passwordSignUp}
          name={this.state.nameSignUp}
          handleSubmit={this.handleSubmitSignUp}
        />
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
    onGetUserFolders: (user) => dispatch(actionCreators.getUserFolders(user)),
    onFetchUserRating: (user) => dispatch(actionCreators.fetchUserRating(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
