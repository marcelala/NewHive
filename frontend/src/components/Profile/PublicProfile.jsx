import { useEffect, useState } from "react";
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
  const [profile, setProfile] = useState({});
  const [posts, setPosts] = useState([]);

  // Constants
  const profileOwner = useParams();
  // const userPostCards = allPosts
  //   .filter((post) => user.email === post.author)
  //   .map((post) => <PostCard key={post.author} post={post} />);

  const ownersPosts = allPosts.map((post) => (
    <PostCard key={post.author} post={post} />
  ));

  useEffect(() => {
    PostApi.getPostsByEmail(profileOwner.email)
      .then(({ data }) => {
        if (data) {
          setAllPosts(data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    ProfileApi.viewProfileByEmail(profileOwner.email)
      .then(({ data }) => {
        if (data) {
          setProfile(data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  // Methods

  async function updatePost(id, updatedPost) {
    try {
      await PostApi.updatePost(id, updatedPost);
      const newPosts = [...posts];
      const ind = posts.findIndex((item) => item.id === id);
      newPosts[ind] = { ...newPosts[ind], ...updatedPost };
      setPosts([...newPosts]);
    } catch (e) {
      console.error(e);
    }
  }

  async function deletePost(post) {
    try {
      await PostApi.deletePost(post.id);
      const newPosts = posts.filter((p) => p.id !== post.id);

      setPosts(newPosts);
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <section className="public-profile-section">

    <div className="public-profile">
      <div className="profile__userCard">
        {profile.name && <UserCard key={profile.id} profileInfo={profile} />}
      </div>
      <div className="profile-welcome">
      <h2>{profile.name}'s Profile</h2>
      <div className="profile__userPosts">{ownersPosts}</div>
    </div>
    </div>
    </section>
  );
};
