import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Api
import ProfileApi from "../../api/ProfileApi";
import PostApi from "../../api/PostApi";
import UserApi from "../../api/UserApi";
import FollowerApi from "../../api/FollowerApi";
//
//Components
import UserCard from "../UserCard";
import PostCard from "../Post/PostCard";

export const PublicProfile = () => {
  // State
  const [allPosts, setAllPosts] = useState([]);
  const [profile, setProfile] = useState({});
  const [isFollowing, setIsFollowing] = useState(false);

  // Constants
  const profileOwner = useParams();

  const ownersPosts = allPosts.map((post) => (
    <PostCard
      key={post.author}
      post={post}
      onPostUpdate={(postData) => updatePost(post.id, postData)}
      onDeleteClick={() => deletePost(post)}
    />
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
          return data;
        }
      })
      .then((profileData) => {
        FollowerApi.isFollowing(profileData.id).then(({ data }) => {
          if (data) {
            setIsFollowing(data);
          }
        });
      })
      .catch((err) => console.error(err));
  }, []);

  // Methods

  async function updatePost(id, updatedPost) {
    try {
      await PostApi.updatePost(id, updatedPost);
      const newPosts = [...allPosts];
      const ind = allPosts.findIndex((item) => item.id === id);
      newPosts[ind] = { ...newPosts[ind], ...updatedPost };
      setAllPosts([...newPosts]);
    } catch (e) {
      console.error(e);
    }
  }

  async function deletePost(post) {
    try {
      await PostApi.deletePost(post.id);
      const newPosts = allPosts.filter((p) => p.id !== post.id);

      setAllPosts(newPosts);
    } catch (e) {
      console.error(e);
    }
  }

  async function addFollower(id) {
    try {
      console.log("Follow", isFollowing);
      const response = await FollowerApi.addFollower(id);
      setIsFollowing(true);
    } catch (e) {
      console.error(e);
    }
  }

  async function removeFollower(id) {
    try {
      console.log("Follow", isFollowing);
      const response = await FollowerApi.removeFollower(id);
      setIsFollowing(false);
    } catch (e) {
      console.error(e);
    }
  }

  const handleSubmit = () => {
    if (!isFollowing) addFollower(profile.id);
    else removeFollower(profile.id);
  };

  return (
    <section className="public-profile-section">
      <div className="public-profile">
        <div className="profile__userCard">
          {profile.owner && <UserCard key={profile.id} profileInfo={profile} />}
          {isFollowing ? (
            <button
              className="btn connect"
              type="button"
              onClick={handleSubmit}
            >
              <FontAwesomeIcon
                className="add-user"
                icon={["fa", "user-check"]}
              />
              We are connected
            </button>
          ) : (
            <button
              className="btn connected"
              type="button"
              onClick={handleSubmit}
            >
              <FontAwesomeIcon
                className="add-user"
                icon={["fa", "user-plus"]}
              />
              Connect with me
            </button>
          )}
        </div>
        <div className="profile-welcome">
          <h2>{profile.name}'s Profile</h2>
          <div className="profile__userPosts">{ownersPosts}</div>
        </div>
      </div>
    </section>
  );
};
