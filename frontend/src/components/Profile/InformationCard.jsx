import { useEffect, useState } from "react";
import UserApi from "../../api/UserApi";
import ProfileApi from "../../api/ProfileApi";
import MyEditor from "../MyEditor";

export default function InformationCard({ profileInfo }) {
  const { name, surname, countryFrom, liveIn, bio, mentorArea } = profileInfo;
  const photoObject = require ("../../assets/images/profile/profile-photo.png")
  const photoURL = photoObject.default;
  
  return (
    <div className="profile">
     < MyEditor />
      <div className="profile-section">
        <div className="profile-photo">
          <div>
            <img src={photoURL} alt="a girl with a cup of tea" />
          </div>
        </div>
        <div className="profile-info">
          <h2>Personal information</h2>
          <p className="bold-p">Name: </p>
          <p>{name}</p>
          <p className="bold-p">Surname: </p>
          <p>{surname}</p>
          <p className="bold-p">I am from: </p>
          <p>{countryFrom}</p>
          <p className="bold-p">I live in: </p>
          <p>{liveIn}</p>
          <p className="bold-p">Bio: </p>
          <p>{bio}</p>
          {/*<p>Open for mentoring others: {profileInfo.mentor}</p>*/}
          <p className="bold-p"> Can mentor in: </p> <p>{mentorArea}</p>
        </div>
      </div>
    </div>
  );
}
