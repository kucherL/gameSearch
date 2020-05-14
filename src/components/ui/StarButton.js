import React, { Component } from "react";

import "./UiItems.scss";

class StarButton extends Component {
  render = () => {
    return <button className="StarButton" onClick={this.props.click} />;
  };
}

export default StarButton;
