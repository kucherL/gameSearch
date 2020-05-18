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
      <div className="ProfileInfo__about--item">
        <svg>
          <use href={sprite + "#icon-profile"} />
        </svg>
        <p>Login: {props.profileData.name}</p>
      </div>
      <div className="ProfileInfo__about--item">
        <svg>
          <use href={sprite + "#icon-envelope"} />
        </svg>
        <p>Email: {props.profileData.email}</p>
      </div>
      <div className="ProfileInfo__about--item">
        <Link to="/profileSettings">
          <svg>
            <use href={sprite + "#icon-cogs"} />
          </svg>
        </Link>
        <p>Settings</p>
      </div>
    </figcaption>
  </figure>
);

export default profileInfo;
