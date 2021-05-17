import { useEffect, useState } from "react";
import UserApi from "../api/UserApi";
import ProfileApi from "../api/ProfileApi";
import Lady from "../assets/images/profile/profile-photo.png";

export default function UserCard({ profileInfo }) {
  const { name, surname, countryFrom, liveIn, bio, mentorArea } = profileInfo;

  return (
    <div>
      <img src={Lady} className="UserCard__avatar" />
      <div className="full-name">
        <p>
          {name} {surname}
        </p>
      </div>
      <p className="userCard__origin">
        I'm from {countryFrom} now I live in {liveIn}
    </p>

      {/* <p className="userCard__mentorship">
        {" "}
        I can mentor others in {mentorArea}
      </p>
      <p className="userCard__bio"> Bio: </p>
      <p>{bio}</p> */}
    </div>
  );
}
