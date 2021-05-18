import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Api
import UserApi from "../../api/UserApi";
import PostApi from "../../api/PostApi";
import ProfileApi from "../../api/ProfileApi";

import UserCard from "../UserCard";
import Cactus from "../../assets/images/cactus.jpg";


export default function PostImage({ post }) {
// Constants
    const profileOwner = useParams();
    const [image, setImage] = useState([]);
    const [profile, setProfile] = useState({});

// // Methods
// useEffect(() => {
//   ProfileApi.viewProfileByEmail(profileOwner.email)
//     .then(({ data }) => {
//       if (data) {
//         setProfile(data);
//       }
//     })
//     .catch((err) => console.error(err));
// }, []);

    
return(

      <div className="postCard-image">
        <p>{post.image}</p>
      </div>


)


}
