import React, { useState } from "react";
import { Link } from "react-router-dom";

import SubmitButton from "./ui/SubmitButton";

const Header = () => {
  const [homePage, setHomePage] = useState(true);

  const homePageHandler = () => {
    setHomePage(!homePage);
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
          {/* TODO:убрать этот блок!! */}
          <li className="Header__container-right__item">
            <Link to="/singlePage">
              Временная!!
            </Link>
          </li>
          <li className="Header__container-right__item">
            <a href="/">Профиль</a>
          </li>
          <li className="Header__container-right__item">
            <a href="/">Настройки</a>
          </li>
        </ul>
        <SubmitButton>Logout</SubmitButton>
      </nav>
    </header>
  );
};

export default Header;
