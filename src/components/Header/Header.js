import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Header.scss";
import { signOut } from "../../firebase";
import SubmitButton from "../ui/SubmitButton/SubmitButton";

const Header = () => {
  const [homePage, setHomePage] = useState(true);
  const [login, setLogin] = useState(false);

  const homePageHandler = () => {
    setHomePage(!homePage);
  };

  const handleSignInWithGoogle = () => {
    setLogin(true);
  };

  const handleSignOutWithGoogle = () => {
    signOut();
    setLogin(false);
  };

  return (
    <header className="Header">
      <img
        src={require("../../assets/иконка7.svg")}
        alt="logo"
        className="Header__logo"
      />
      <nav className="Header__navigation">
        <ul>
          <li>
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
          <li>
            <Link to="/userPage">Профиль</Link>
          </li>
          <li>
            {!login ? (
              <Link to="/auth">
                <SubmitButton click={handleSignInWithGoogle}>
                  Войти
                </SubmitButton>
              </Link>
            ) : (
              <SubmitButton click={handleSignOutWithGoogle}>Выход</SubmitButton>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
