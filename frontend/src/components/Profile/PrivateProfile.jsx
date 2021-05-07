import React from "react";
import info from "../../data/info.json";
import InformationCard from "./InformationCard";

export default function PrivateProfile () {
    const Information = info.map((item) => (
        <InformationCard key={item.id} information={item}/>
    ));
    return (
        <div className="full-profile">
            <h1>My Profile</h1>
            {Information}
            <h2>My Posts</h2>
            <h2>Posts I have interacted with</h2>
        </div>
    )
}