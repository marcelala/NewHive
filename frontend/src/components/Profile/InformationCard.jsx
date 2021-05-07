import React from "react";

export default function InformationCard ({information}) {
    const photoObject = require (`../../assets/images/profile/profile-photo.png`);
    const photoURL = photoObject.default;

    return (
        <div className="profile">
            <div className="full-name">
                <p>{information.name}</p>
                <p>{information.surname}</p>
            </div>
                <img className="profile-photo" src={photoURL} alt="a photo of a woman"/>
            <div className="profile-info">
                <h2>Personal Information</h2>
                <p>I am from: {information.countryFrom}</p>
                <p>I live in: {information.liveIn}</p>
                <p>Bio: {information.bio}</p>
                <p>Open for mentoring others:</p>
                <input type="checkbox"/>
                <p>Can mentor in: {information.mentorArea}</p>
                <button className="btn">Edit Profile</button>
            </div>
        </div>
    )
}