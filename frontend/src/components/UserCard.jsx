import { useState } from "react";

export default function UserCard({ profileInfo }) {
  const { name, surname, countryFrom, liveIn, bio, mentorArea } = profileInfo;
  const [toggleInfo, setToggleInfo] = useState(false);
  const item = localStorage.getItem("avatarNum");
  const photoObject = require(`../assets/images/avatars/avatar${item}.jpg`);
  const photoURL = photoObject.default;

  return (
    <section
      className="userCard"
      onClick={() => (toggleInfo ? setToggleInfo(false) : setToggleInfo(true))}
    >
      <img src={photoURL} className="userCard__avatar" alt="" />
      <p className="userCard__full-name">
        {name} {surname}
      </p>
      <div className="userCard__text">
        <p className="userCard__origin">
          I'm from {countryFrom}. My home now is in {liveIn}
        </p>
        {toggleInfo && (
          <div className="userCard__info">
            {/* <p className="userCard__email">{profileInfo.email}</p> */}
            <br />
            <p className="userCard__bio"> Bio: </p>
            <p>{bio}</p>
            <br />
            <p className="userCard__mentorship">
              I can mentor others in {mentorArea}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
