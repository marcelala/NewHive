import React from "react";

export default function InformationCard ({information}) {
    const frameObject = require (`../../assets/images/profile/Photo.jpg`);
    const frameURL = frameObject.default;

    return (
        <div>
            <div>
                <p>{information.name}</p>
                <p>{information.surname}</p>
            <img src={frameURL} alt="an illustration frame"/>
            </div>
            <div>
                <h2>Personal Information</h2>
                <p>I am from: {information.countryFrom}</p>
                <p>I live in: {information.liveIn}</p>
                <p>Bio: {information.bio}</p>
            </div>
            <div>
                <p>Open for mentoring others:</p>
                <input type="checkbox"/>
                <p>Can mentor in: {information.mentorArea}</p>
            </div>
            <div>
                <button>Edit Profile</button>
            </div>
        </div>
    )
}