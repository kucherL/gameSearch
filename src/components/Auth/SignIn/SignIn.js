import React from "react";

import "./SignIn.scss";

const SignIn = (props) => (
  <section className="SignIn">
    <form className="SignIn__form" onSubmit={props.handleSubmit}>
      <h2>Sign In</h2>
      <input
        type="email"
        name="emailSignIn"
        placeholder="Email"
        value={props.email}
        onChange={props.handleChange}
      />
      <input
        type="password"
        name="passwordSignIn"
        placeholder="Password"
        value={props.password}
        onChange={props.handleChange}
      />
      <input type="submit" value="Sign In" />
    </form>
    <button className="SignIn__google" onClick={props.click}>
      Sign In With Google
    </button>
  </section>
);

export default SignIn;
