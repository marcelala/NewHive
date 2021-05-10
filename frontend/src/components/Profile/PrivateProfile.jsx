import React, { useEffect, useState } from "react";
import ProfileApi from "../../api/ProfileApi";
import InformationCard from "./InformationCard";
import ProfileForm from "./ProfileForm";

export default function PrivateProfile ({profileInfo}) {

    const [profile, setProfile] = useState({});
    async function createProfile(profile) {
        try {
            const response = await ProfileApi.createProfile(profile);
            setProfile(response.data);
        } catch (e) {
            console.error(e);
        }
    }
    useEffect(()=> {
        ProfileApi.viewProfile()
        .then(({ data }) => {
            if (data == ""){
                setProfile({});
            } else {
                setProfile(data);
            }
            
        })
        .catch((err)=> console.error(err));
    }, [setProfile]);

    return (
        <div className="full-profile">
            <h1>My Profile</h1>
           {profile != {} ? <InformationCard key={profile.id} profileInfo={profile}/> : ""}
            <ProfileForm onSubmit={(profileData) => createProfile(profileData)} />
            <h2>My Posts</h2>
            <h2>Posts I have interacted with</h2>
        </div>
    )
}