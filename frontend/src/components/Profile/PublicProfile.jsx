import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useParams } from "react-router-dom";

//Api
import ProfileApi from "../../api/ProfileApi";
import PostApi from "../../api/PostApi";
//State
import { postsState, allPosts } from "../../state/postData";
import { allProfiles } from "../../state/profileData";
//Components
import UserCard from "../UserCard";
import PostCard from "../Post/PostCard";


export const PublicProfile = () => {
  // Global state
  const [posts, setPosts] = useRecoilState(postsState);
  const postsGlobal = useRecoilValue(allPosts);
  const profilesGlobal = useRecoilValue(allProfiles);
  const [profileOwner, setProfileOwner] = useState({});

  // Constants
  const { id } = useParams();


    useEffect(() => {
        ProfileApi.viewProfileById()
          .then(({ data }) => {
            if (data) {
              setProfileOwner(data);
            }
          })
          .catch((err) => console.error(err));
      }, []);

      const userPostCards = postsGlobal
    .filter((post) => profileOwner.name === post.authorname.id)
    .map((post) => (
      <PostCard
        key={post.id}
        post={post}
      />
    ));

    return(
  <div className="public-profile">
  <div className="profile__userCard">
    <UserCard key={profileOwner.id} profileInfo={profileOwner} />
  </div>
  <div className="profile__userPosts">
      {userPostCards}
      </div>
  </div>

)}