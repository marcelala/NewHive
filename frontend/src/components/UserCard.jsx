import { useEffect, useState } from "react";
import UserApi from "../api/UserApi";
import ProfileApi from "../api/ProfileApi";
import Lady from "../assets/images/profile/profile-photo.png";


export default function UserCard({ profileInfo }) {
  const { name, surname, countryFrom, liveIn, bio, mentorArea } = profileInfo;


  return (
    <div>
        <img src={Lady} className="UserCard__avatar"/>
      <div className="full-name">
        <p>{name} {surname}</p>
      </div>
      <p className="bold-p"> Can mentor in: </p> <p>{mentorArea}</p>

    </div>
  );
}