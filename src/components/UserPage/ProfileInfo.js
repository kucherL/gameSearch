import React from "react";

const ProfileInfo = () => {
  return (
    <section className="ProfileInfo">
      <div className="ProfileInfo__photo">
        <img src="/" alt="user_photo" />
      </div>
      <div className="ProfileInfo__about">
        <p className="ProfileInfo__login">Login: </p>
        <p className="ProfileInfo__email">Email: </p>
      </div>
    </section>
  )
}

export default ProfileInfo;