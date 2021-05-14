import { useEffect, useState } from "react";
import UserApi from "../../api/UserApi";
import ProfileApi from "../../api/ProfileApi";

export default function InformationCard({ profileInfo }) {
  const { name, surname, countryFrom, liveIn, bio, mentorArea } = profileInfo;

<<<<<<< HEAD
export default function InformationCard ({profileInfo}) {
    const TestPhotoObject = require (`../../assets/images/profile/profile-photo.png`);
    const TestPhotoURL = TestPhotoObject.default;
    return (
        <div className="profile">
            <div className="profile-grid">
                <div className="profile-section">
                    <div className="profile-photo">
                        <img src={TestPhotoURL} alt="a portrait photo of a woman with a cup of tea"/>
                    </div>
                    <div className="profile-info">
                        <h2>Personal information</h2>
                        <p>Name: {profileInfo.name}</p>
                        <p>Surname: {profileInfo.surname}</p>
                        <p>I am from: {profileInfo.countryFrom}</p>
                        <p>I live in: {profileInfo.liveIn}</p>
                        <p>Bio: {profileInfo.bio}</p>
                        {/*<p>Open for mentoring others: {profileInfo.mentor}</p>*/}
                        <p>Can mentor in: {profileInfo.mentorArea}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
=======
  return (
    <div>
      <div className="full-name">
        <p>Name: {name}</p>
        <p>Surname: {surname}</p>
      </div>
      <div className="profile-info">
        <h2>Personal information</h2>
        <p>I am from: {countryFrom}</p>
        <p>I live in: {liveIn}</p>
        <p>Bio: {bio}</p>
        {/*<p>Open for mentoring others: {profileInfo.mentor}</p>*/}
        <p>Can mentor in: {mentorArea}</p>
      </div>
    </div>
  );
}
>>>>>>> f256a91579df38f8df960f1c698e120ef5685be2
