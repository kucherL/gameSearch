import React, { Component } from "react";

import { auth, firestore, storage } from "../../firebase";

class ProfileSettings extends Component {
  state = { name: "" };
  imageInput = null;

  get uid() {
    return auth.currentUser.uid;
  }

  get userRef() {
    return firestore.collection("users").doc(this.uid);
  }

  get file() {
    return this.imageInput && this.imageInput.files[0];
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { name } = this.state;

    if (name) {
      this.userRef.update(this.state);
    }

    if (this.file) {
      storage
        .ref()
        .child("user-profiles")
        .child(this.uid)
        .child(this.file.name)
        .put(this.file)
        .then((res) => res.ref.getDownloadURL())
        .then((photoURL) => this.userRef.update({ photoURL }));
    }
  };

  render() {
    const { name } = this.state;

    return (
      <section className="UserProfile">
        <form onSubmit={this.handleSubmit} className="UpdateUser">
          <input
            type="text"
            name="displayName"
            value={name}
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
      </section>
    );
  }
}

export default ProfileSettings;
