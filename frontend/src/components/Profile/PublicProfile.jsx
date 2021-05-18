import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Api
import ProfileApi from "../../api/ProfileApi";
import PostApi from "../../api/PostApi";
import UserApi from "../../api/UserApi";
import FollowerApi from "../../api/FollowerApi";


//Components
import UserCard from "../UserCard";
import PostCard from "../Post/PostCard";

export const PublicProfile = () => {
  // State
  const [allPosts, setAllPosts] = useState([]);
  const [profile, setProfile] = useState({});
  const [posts, setPosts] = useState([]);
  const [isFollower, setIsFollower] = useState([]);
  const [startFollowing, setStartFollowing] = useState(false);

  

  // Constants
  const profileOwner = useParams();


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

  useEffect(() => {
    FollowerApi.addFollower(profileOwner.id)
      .then(({ data }) => {
        if (data) {
          setIsFollower(true);
          setStartFollowing(data);
        }
      })
      .catch((err) => console.error(err));
  }, [setIsFollower, setStartFollowing]);

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

  async function addFollower(id) {
    try {
      console.log("Follow", isFollower);
      const response = await FollowerApi.addFollower(id);
      setStartFollowing({ ...response.data });
      setIsFollower(true);
    } catch (e) {
      console.error(e);
    }
  }

  async function removeFollower(id) {
    try {
      console.log("Follow", isFollower);
      const response = await FollowerApi.removeFollower(id);
      setStartFollowing({ ...response.data });
      setIsFollower(false);
    } catch (e) {
      console.error(e);
    }
  }
  
  return (
    <section className="public-profile-section">

    <div className="public-profile">
      <div className="profile__userCard">
        {profile.owner && <UserCard key={profile.id} profileInfo={profile} />}
        <button className="btn connect" type="button">Connect with me</button>
      </div>
      <div className="profile-welcome">
      <h2>{profile.name}'s Profile</h2>
      <div className="profile__userPosts">{ownersPosts}</div>
    </div>
    </div>
    </section>
  );
};
