import React, { useEffect, useState } from "react";
import UserApi from "../../api/UserApi";
import ProfileApi from "../../api/ProfileApi";


export default function InformationCard ({profileInfo}) {

    return (
        <div className="profile">
            <div className="full-name">
                <p>Name: {profileInfo.name}</p>
                <p>Surname: {profileInfo.surname}</p>
            </div>
            <div className="profile-info">
                <h2>Personal information</h2>
                <p>I am from: {profileInfo.countryFrom}</p>
                <p>I live in: {profileInfo.liveIn}</p>
                <p>Bio: {profileInfo.bio}</p>
                <p>Open for mentoring others:</p>
                <input type="checkbox"/>
                <p>Can mentor in: {profileInfo.mentorArea}</p>
            </div>
        </div>
    )
}