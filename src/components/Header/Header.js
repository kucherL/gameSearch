import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./Header.scss";
import { signOut } from "../../firebase";
import SubmitButton from "../ui/SubmitButton/SubmitButton";

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
                  Поиск
                </Link>
              ) : (
                <Link to="/" onClick={this.homePageHandler}>
                  На главную
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
                  <SubmitButton>Войти</SubmitButton>
                </Link>
              ) : (
                <SubmitButton click={signOut}>Выход</SubmitButton>
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
