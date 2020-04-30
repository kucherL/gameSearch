import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'

const toRememberButton = () => (
  <button className="ToRememberButton">
    <FontAwesomeIcon icon={faGamepad} size={"2x"} />
  </button>
);

export default toRememberButton;
