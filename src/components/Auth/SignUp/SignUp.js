import React from "react";

import "./SignUp.scss";

const signUp = (props) => (
  <form className="SignUp" onSubmit={props.handleSubmit}>
    <h2>Sign Up</h2>
    <input
      type="text"
      name="displayName"
      placeholder="Display Name"
      value={props.name}
      onChange={props.handleChange}
    />
    <input
      type="email"
      name="email"
      placeholder="Email"
      value={props.email}
      onChange={props.handleChange}
    />
    <input
      type="password"
      name="password"
      placeholder="Password"
      value={props.password}
      onChange={props.handleChange}
    />
    <input type="submit" value="Sign Up" />
  </form>
);

export default signUp;
