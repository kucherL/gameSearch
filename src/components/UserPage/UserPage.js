import React, { Component } from "react";

import "./UserPage.scss";
import ProfileInfo from "./ProfileInfo";
import FoldersSection from "./FoldersSection";

class UserPage extends Component {
  render() {
    return (
      <main className="UserPage">
        <ProfileInfo />
        <FoldersSection />
      </main>
    )
  }
}

export default UserPage;