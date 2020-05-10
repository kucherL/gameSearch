import React, { Component } from "react";

import "./Auth.scss";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import SubmitButton from "../ui/SubmitButton";
import { auth, createUserProfile } from "../../firebase";

class Auth extends Component {

  state = {
    user: null,
  };

  unsubscribeFormAuth = null;

  componentDidMount = async () => {
    this.unsubscribeFormAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.setState({user: {uid: snapshot.id, ...snapshot.data()}});
        });
      }
      this.setState({user: userAuth});
    });
  };

  componentWillUnmount = () => {
    this.unsubscribeFormAuth();
  };

  render() {
    // return <div>{user ? <CurrentUser {...user} /> : <SignInAndSignUp />}</div>;
    return (
      <div className="Auth">
        <SignIn />
        <SignUp />
        <SubmitButton />
      </div>
    )
  }
}

export default Auth;