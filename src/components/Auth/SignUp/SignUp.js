import React from "react";

import "./SignUp.scss";

const SignUp = (props) => (
  <form className="SignUp" onSubmit={props.handleSubmit}>
    <h2>Sign Up</h2>
    <input
      type="text"
      name="nameSignUp"
      placeholder="Display Name"
      value={props.name}
      onChange={props.handleChange}
    />
    <input
      type="email"
      name="emailSignUp"
      placeholder="Email"
      value={props.email}
      onChange={props.handleChange}
    />
    <input
      type="password"
      name="passwordSignUp"
      placeholder="Password"
      value={props.password}
      onChange={props.handleChange}
    />
    <input type="submit" value="Sign Up" />
  </form>
);

export default SignUp;
