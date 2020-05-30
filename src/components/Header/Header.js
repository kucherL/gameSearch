import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./Header.scss";
import * as actionCreators from "../../store/actions/actions";
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
          <img
            src={require("../../assets/portfolio-icon.svg")}
            alt="logo"
            className="Header__logo"
          />
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
                <Link to="/userPage">Профиль</Link>
              </li>
            ) : null}
            <li>
              {!this.props.user ? (
                <Link to="/auth">
                  <SubmitButton>Enter</SubmitButton>
                </Link>
              ) : (
                <SubmitButton click={this.props.onLogout}>Выход</SubmitButton>
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

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actionCreators.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
