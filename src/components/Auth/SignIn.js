import React, { Component } from "react";
import { signInWithGoogle, auth } from "../../firebase";

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

  // TODO: реализовать авторизацию через гугл

  render() {
    const { email, password } = this.state;
    return (
      <>
        <form className="SignIn" onSubmit={this.handleSubmit}>
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
        <button onClick={signInWithGoogle}>Sign In With Google</button>
      </>
    );
  }
}

export default SignIn;
