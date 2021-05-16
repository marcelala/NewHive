import { useEffect, useState } from "react";
import UserApi from "../../api/UserApi";
import ProfileApi from "../../api/ProfileApi";

export default function InformationCard({ profileInfo }) {
  const { name, surname, countryFrom, liveIn, bio, mentorArea } = profileInfo;

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
