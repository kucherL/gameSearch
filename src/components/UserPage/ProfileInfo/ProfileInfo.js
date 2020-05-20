import React, { Component } from "react";
import { firestore, storage } from "../../../firebase";

import "./ProfileInfo.scss";
import sprite from "../../../assets/sprite.svg";

class ProfileInfo extends Component {
  state = { name: "", profileChange: false };
  imageInput = null;

  get userRef() {
    return firestore.collection("users").doc(this.props.uid);
  }

  get file() {
    return this.imageInput && this.imageInput.files[0];
  }

  handleClick = () => {
    this.setState({ profileChange: !this.state.profileChange });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.name) {
      this.userRef.update(this.state);
    }

    if (this.file) {
      storage
        .ref()
        .child("user-profiles")
        .child(this.props.uid)
        .child(this.file.name)
        .put(this.file)
        .then((res) => res.ref.getDownloadURL())
        .then((photoURL) => this.userRef.update({ photoURL }));
    }
  };

  render() {
    return (
      <figure className="ProfileInfo">
        <div className="ProfileInfo__photo">
          {this.props.profileData.photoURL ? (
            <img
              src={this.props.profileData.photoURL}
              alt={this.props.profileData.name}
            />
          ) : (
            <svg alt="poster" className="Poster-svg">
              <use href={sprite + "#icon-spaceinvaders"} />
            </svg>
          )}
          <button className="ProfileInfo__settings" onClick={this.handleClick}>
            <svg>
              <use href={sprite + "#icon-cogs"} />
            </svg>
          </button>
        </div>
        <figcaption className="ProfileInfo__about">
          <div className="ProfileInfo__about--item">
            <svg>
              <use href={sprite + "#icon-profile"} />
            </svg>
            <p>Login: {this.props.profileData.name}</p>
            <button
              className="ProfileInfo__settings"
              onClick={this.handleClick}
            >
              <svg>
                <use href={sprite + "#icon-cogs"} />
              </svg>
            </button>
          </div>
          <div className="ProfileInfo__about--item">
            <svg>
              <use href={sprite + "#icon-envelope"} />
            </svg>
            <p>Email: {this.props.profileData.email}</p>
          </div>
        </figcaption>
        {this.state.profileChange ? (
          <form onSubmit={this.handleSubmit} className="UpdateUser">
            <input
              type="text"
              name="name"
              value={this.state.name}
              placeholder="Display Name"
              onChange={this.handleChange}
            />
            <input
              type="file"
              ref={(ref) => {
                this.imageInput = ref;
              }}
            />
            <input className="update" type="submit" />
          </form>
        ) : null}
      </figure>
    );
  }
}

export default ProfileInfo;
