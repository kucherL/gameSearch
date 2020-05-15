import React, { Component } from "react";
import { signInWithGoogle, auth } from "../../../firebase";

import "./SignIn.scss";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    await auth.signInWithEmailAndPassword(
      this.state.email,
      this.state.password
    );
    this.setState({ email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;
    return (
      <section className="SignIn">
        <form className="SignIn__form" onSubmit={this.handleSubmit}>
          <h2>Sign In</h2>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={this.handleChange}
          />
          <input type="submit" value="Sign In" />
        </form>
        <button className="SignIn__google" onClick={signInWithGoogle}>Sign In With Google</button>
      </section>
    );
  }
}

export default SignIn;
