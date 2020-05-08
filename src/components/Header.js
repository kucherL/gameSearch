import React, { useState } from "react";
import { Link } from "react-router-dom";

import { signInWithGoogle, signOut } from "../firebase";
import SubmitButton from "./ui/SubmitButton";

const Header = () => {
  const [homePage, setHomePage] = useState(true);
  const [login, setLogin] = useState(false);

  const homePageHandler = () => {
    setHomePage(!homePage);
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle();
    setLogin(true);
  };

  const handleSignOutWithGoogle = () => {
    signOut();
    setLogin(false);
  };

  return (
    <header className="Header">
      <div className="Header__container-left">
        <img
          src={require("../assets/иконка7.svg")}
          alt="logo"
          className="Logo"
        />
      </div>
      <nav className="Header__container-right">
        <ul className="Header__container-right__items">
          <li className="Header__container-right__item">
            {homePage ? (
              <Link to="/search" onClick={homePageHandler}>
                Поиск
              </Link>
            ) : (
              <Link to="/" onClick={homePageHandler}>
                На главную
              </Link>
            )}
          </li>
          <li className="Header__container-right__item">
            <Link to="/userPage">
              <a href="/">Профиль</a>
            </Link>
          </li>
          <li className="Header__container-right__item">
            <a href="/">Настройки</a>
          </li>
        </ul>
        {!login ? (
          <SubmitButton click={handleSignInWithGoogle}>Войти</SubmitButton>
        ) : (
          <SubmitButton click={handleSignOutWithGoogle}>Выход</SubmitButton>
        )}
      </nav>
    </header>
  );
};

export default Header;
