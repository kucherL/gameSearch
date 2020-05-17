import React from "react";
import { Link } from "react-router-dom";

import "./ProfileInfo.scss";
import sprite from "../../../assets/sprite.svg";

const profileInfo = (props) => (
  <figure className="ProfileInfo">
    <div className="ProfileInfo__photo">
      <img src={props.profileData.photoURL} alt={props.profileData.name} />
    </div>
    <figcaption className="ProfileInfo__about">
      <svg>
        <use href={sprite + "#icon-profile"} />
      </svg>
      <p className="ProfileInfo__login">Login: {props.profileData.name}</p>
      <svg>
        <use href={sprite + "#icon-envelope"} />
      </svg>
      <p className="ProfileInfo__email">Email: {props.profileData.email}</p>
    </figcaption>
    <Link to="/profileSettings">
      <svg>
        <use href={sprite + "#icon-cogs"} />
      </svg>
    </Link>
  </figure>
);

export default profileInfo;
