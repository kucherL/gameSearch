import React from "react";

import SubmitButton from "./ui/SubmitButton";

const header = () => (
  <header className="Header">
    <div className="Header__container-left">
      <img src="/" alt="/" className="Logo" />
    </div>
    <div className="Header__container-right">
      <ul className="Header__container-right__items">
        <li className="Header__container-right__item">
          <a src="/"></a>
        </li>
        <li className="Header__container-right__item">
          <a src="/"></a>
        </li>
      </ul>
      <SubmitButton>Logout</SubmitButton>
    </div>
  </header>
);

export default header;