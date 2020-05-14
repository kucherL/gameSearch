import React, { Component } from "react";

import "./StarButton.scss";

class StarButton extends Component {
  render = () => {
    return <button className="StarButton" onClick={this.props.click} />;
  };
}

export default StarButton;
