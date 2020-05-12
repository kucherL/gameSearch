import React, { Component } from "react";
import { auth, createUserProfile } from "../../firebase";

class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  handleChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const {email, password, name} = this.state;
    try {
      const {user} = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      createUserProfile(user, {name});
    } catch (error) {
      console.error(error);
    }
    this.setState({name: "", email: "", password: ""});
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <form className="SignUp" onSubmit={this.handleSubmit}>
        <h2>Sign Up</h2>
        <input
          type="text"
          name="displayName"
          placeholder="Display Name"
          value={name}
          onChange={this.handleChangeName}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={this.handleChangeEmail}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={this.handleChangePassword}
        />
        <input type="submit" value="Sign Up" />
      </form>
    );
  }
}

export default SignUp;
