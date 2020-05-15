import React, { Component } from "react";
import { connect } from "react-redux";
import { signInWithGoogle, auth, createUserProfile } from "../../../firebase";

import "./Auth.scss";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";

class Auth extends Component {
  state = {
    signIn: {
      email: "",
      password: "",
    },
    signUp: {
      name: "",
      email: "",
      password: "",
    },
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmitSignIn = async (event) => {
    event.preventDefault();
    await auth.signInWithEmailAndPassword(
      this.state.signIn.email,
      this.state.signIn.password
    );
    this.state.signIn.setState({ email: "", password: "" });
  };

  handleSubmitSignUp = async (event) => {
    event.preventDefault();
    const { email, password, name } = this.state.signUp;
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      createUserProfile(user, { name });
    } catch (error) {
      console.error(error);
    }
    this.state.signUp.setState({ name: "", email: "", password: "" });
  };

  render() {
    return (
      <main className="Auth">
        <SignIn
          handleChange={this.handleChange}
          email={this.state.signIn.email}
          password={this.state.signIn.password}
          handleSubmit={this.handleSubmitSignIn}
          click={signInWithGoogle}
        />
        <SignUp 
          handleChange={this.handleChange}
          email={this.state.signUp.email}
          email={this.state.signUp.password}
          email={this.state.signUp.name}
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

export default connect(mapStateToProps)(Auth);
