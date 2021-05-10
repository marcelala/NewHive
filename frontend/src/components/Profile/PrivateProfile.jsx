import React, { useEffect, useState } from "react";
import ProfileApi from "../../api/ProfileApi";
import EditProfile from "./EditProfile";
import InformationCard from "./InformationCard";
import ProfileForm from "./ProfileForm";

export default function PrivateProfile ({profileInfo}) {

    const [toggleAdd, setToggleAdd] = useState(false);
    const [toggleEdit, setToggleEdit] = useState(false);    
    const [profile, setProfile] = useState({});
    async function createProfile(profile) {
        try {
            const response = await ProfileApi.createProfile(profile);
            setProfile(response.data);
        } catch (e) {
            console.error(e);
        }
    }

    async function editProfile(profile) {
        try {
            const response = await ProfileApi.editProfile(profile);
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
            <button className="btn" type="button" onClick={() => toggleAdd? setToggleAdd(false) : setToggleAdd(true)}>Add info</button>
            <button className="btn" type="button" onClick={() => toggleEdit? setToggleEdit(false) : setToggleEdit(true)}>Edit info</button>
            {toggleAdd && (<ProfileForm onSubmit={(profileData) => createProfile(profileData)} />)}
            {toggleEdit && <EditProfile onSubmit={(profile) => editProfile(profile)} profileInfo={profile}/>}           
            <h2>My Posts</h2>
            <h2>Posts I have interacted with</h2>
        </div>
    )
}