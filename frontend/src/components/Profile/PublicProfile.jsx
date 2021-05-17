import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useParams } from "react-router-dom";

//Api
import ProfileApi from "../../api/ProfileApi";
import PostApi from "../../api/PostApi";
import UserApi from "../../api/UserApi";

//State
import { postsState, allPosts } from "../../state/postData";
import { allProfiles } from "../../state/profileData";
//Components
import UserCard from "../UserCard";
import PostCard from "../Post/PostCard";

export const PublicProfile = () => {
  // State
  const [allPosts, setAllPosts] = useState([]);

  // Constants

  useEffect(() => {
    PostApi.getPostsByEmail(profileOwner.email)
      .then(({ data }) => {
        if (data) {
          setAllPosts(data);
        }
      })
      .catch((err) => console.error(err));
  }, []);
  const profileOwner = useParams();
  // const userPostCards = allPosts
  //   .filter((post) => user.email === post.author)
  //   .map((post) => <PostCard key={post.author} post={post} />);

const ownersPosts = allPosts
.map((post) => <PostCard key={post.author} post={post} />);

  return (
    <div className="public-profile">
      <div className="profile__userCard">
        <UserCard key={profileOwner.email} profileInfo={profileOwner.email} />
      </div>
      <div className="profile__userPosts">{ownersPosts}</div>
    </div>
  );
};
