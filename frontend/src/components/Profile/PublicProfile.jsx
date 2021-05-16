import { useEffect, useState } from "react";

//Api
import ProfileApi from "../../api/ProfileApi";
//Components
import UserCard from "../UserCard"

export const PublicProfile = ({ item }) => {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        ProfileApi.viewProfileById()
          .then(({ data }) => {
            if (data) {
              setProfile(data);
            }
          })
          .catch((err) => console.error(err));
      }, []);

    return(

        <UserCard key={profile.id} profileInfo={profile} />



)}