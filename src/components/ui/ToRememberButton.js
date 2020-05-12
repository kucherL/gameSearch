import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

import "./UiItems.scss";

class ToRememberButton extends Component {
  

  render = () => {
    return (
      <button className="ToRememberButton">
        <FontAwesomeIcon icon={faGamepad} size={"2x"} />
      </button>
    );
  }
}

export default ToRememberButton;
