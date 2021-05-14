import { useEffect, useState } from "react";
import UserApi from "../../api/UserApi";
import ProfileApi from "../../api/ProfileApi";

export default function InformationCard({ profileInfo }) {
  const { name, surname, countryFrom, liveIn, bio, mentorArea } = profileInfo;

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
