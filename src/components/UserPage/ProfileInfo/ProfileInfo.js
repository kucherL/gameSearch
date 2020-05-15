import React from "react";
import { Link } from "react-router-dom";

import "./ProfileInfo.scss";

const profileInfo = (props) => (
  <figure className="ProfileInfo">
    <div className="ProfileInfo__photo">
      <img src={props.profileData.photoURL} alt={props.profileData.name} />
    </div>
    <figcaption className="ProfileInfo__about">
      <Link to="/profileSettings">
        <p className="ProfileInfo__login">
          Login: {props.profileData.name}
        </p>
      </Link>
      <p className="ProfileInfo__email">
        Email: {props.profileData.email}
      </p>
    </figcaption>
  </figure>
);

export default profileInfo;
