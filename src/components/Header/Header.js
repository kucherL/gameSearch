import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { signOut } from "../../firebase";
import "./Header.scss";
import SubmitButton from "../UI/SubmitButton/SubmitButton";

class Header extends Component {
  state = {
    homePage: true,
  };

  homePageHandler = () => {
    this.setState({ homePage: !this.state.homePage });
  };

  render = () => {
    return (
      <header className="Header">
        <Link to="/">
          <h1 className="Header__logo">
            Game<span>Search</span>
          </h1>
        </Link>
        <nav className="Header__navigation">
          <ul>
            <li>
              {window.location.pathname === "/" ? (
                <Link to="/search" onClick={this.homePageHandler}>
                  Search
                </Link>
              ) : (
                <Link to="/" onClick={this.homePageHandler}>
                  Main page
                </Link>
              )}
            </li>
            {this.props.user ? (
              <li>
                <Link to="/userPage">Profile</Link>
              </li>
            ) : null}
            <li>
              {!this.props.user ? (
                <Link to="/auth">
                  <SubmitButton>Enter</SubmitButton>
                </Link>
              ) : (
                <SubmitButton click={signOut}>Exit</SubmitButton>
              )}
            </li>
          </ul>
        </nav>
      </header>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Header);
