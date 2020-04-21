import React from "react";

import SubmitButton from "./ui/SubmitButton";

const header = () => (
  <header className="Header">
    <div className="Header__container-left">
      <img src={require("../assets/иконка7.svg")} alt="logo" className="Logo" />
    </div>
    <nav className="Header__container-right">
      <ul className="Header__container-right__items">
        <li className="Header__container-right__item">
          <a src="/">Профиль</a>
        </li>
        <li className="Header__container-right__item">
          <a src="/">Настройки</a>
        </li>
      </ul>
      <SubmitButton>Logout</SubmitButton>
    </nav>
  </header>
);

export default header;