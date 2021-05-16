import { useEffect, useState } from "react";
import ProfileApi from "../../api/ProfileApi";
import EditProfile from "./EditProfile";
import InformationCard from "./InformationCard";
//import ProfileForm from "./ProfileForm";

export default function PrivateProfile () {

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

    async function editProfile(id, profile) {
      try {
        const {owner, ...updatedData} = profile;
        const response = await ProfileApi.editProfile(id, updatedData);
        setProfile({ ...response.data });
        setToggleEdit(false);
      } catch (e) {
        console.error(e);
      }
    }

    function updateProfile(data){
        return !profileExisted
          ? createProfile(data)
          : editProfile(data.id, data);
    }


    return (
      <div className="full-profile">
        <h1>My Profile</h1>
        {profileExisted && (
          <>
            <InformationCard key={profile.id} profileInfo={profile} />
            <button
              className={  `btn ${toggleEdit ? 'hidden' : ''}`}
              type="button"
              onClick={() =>
                toggleEdit ? setToggleEdit(false) : setToggleEdit(true)
              }
            >
              Edit info
            </button>
          </>
        )}
        {(toggleEdit || !profileExisted) && (
          <EditProfile
            profileInfo={profile}
            onSubmit={(profileData) => updateProfile(profileData)}
          />
        )}
        <h2>My Posts</h2>
      </div>
    );
}