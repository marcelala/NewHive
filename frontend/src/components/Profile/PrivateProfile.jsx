import React, { useEffect, useState } from "react";
import ProfileApi from "../../api/ProfileApi";
import EditProfile from "./EditProfile";
import InformationCard from "./InformationCard";
import ProfileForm from "./ProfileForm";

export default function PrivateProfile () {

  //  const [toggleAdd, setToggleAdd] = useState(false);
    const [toggleEdit, setToggleEdit] = useState(false);    
    const [profile, setProfile] = useState({});
   // const [currentUser, setCurrentUser] = useState({});
    const [profileExisted, setProfileExisted] = useState(false);

    useEffect(() => {
      ProfileApi.viewProfile()
        .then(({ data }) => {
          if (data) {
            setProfile(data);
            setProfileExisted(true);
          }
        })
        .catch((err) => console.error(err));
    }, [setProfile, setProfileExisted]);

    async function createProfile(profile) {
        try {
            console.log("createProfile", profile);
            const response = await ProfileApi.createProfile(profile);
            setProfile({ ...response.data });
            setProfileExisted(true);

        } catch (e) {
            console.error(e);
        }
    }

    async function editProfile(profile) {
        try {
            console.log("editProfile", profile);
            const response = await ProfileApi.editProfile(profile);
            console.log("response", response.data);
            setProfile({...response.data});
        } catch (e) {
            console.error(e);
        }
    }

    function updateProfile(data){
        console.log("updateProfile");
        return !profileExisted ? createProfile(data) : editProfile(data);
    }


    return (
      <div className="full-profile">
        <h1>My Profile</h1>
        {profileExisted && (
            <>
          <InformationCard key={profile.id} profileInfo={profile} />
           <button
            className="btn"
            type="button"
            onClick={() =>
              toggleEdit ? setToggleEdit(false) : setToggleEdit(true)
            }
          >
            Edit info
          </button>
          </>
        )}
        {/* <button className="btn" type="button" onClick={() => (toggleAdd ? setToggleAdd(false) : setToggleAdd(true))}> Add info </button> */}

        {/* {toggleAdd && (
          <ProfileForm onSubmit={(profileData) => createProfile(profileData)} />
        )} */}
        {(toggleEdit || !profileExisted) && (
          <EditProfile
            profileInfo={profile}
            onSubmit={(profileData) => updateProfile(profileData)}
          />
        )}
        <h2>My Posts</h2>
        <h2>Posts I have interacted with</h2>
      </div>
    );
}