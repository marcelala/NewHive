import { useEffect, useState, useMemo } from "react";
import ProfileApi from "../../api/ProfileApi";
import PostApi from "../../api/PostApi";

import EditProfile from "./EditProfile";
import InformationCard from "./InformationCard";
import PostCard from "../Post/PostCard";

//import ProfileForm from "./ProfileForm";
let RandomNum = () => useMemo(() => Math.floor(Math.random() * 10) + 1, []);

export default function PrivateProfile() {
  const [toggleEdit, setToggleEdit] = useState(false);
  const [profile, setProfile] = useState({});
  const [profileExisted, setProfileExisted] = useState(false);
  const [allPosts, setAllPosts] = useState([]);

  const random = RandomNum();
  if (!profileExisted) {
    localStorage.setItem("avatarNum", random);
  }
  useEffect(() => {
    ProfileApi.viewProfile()
      .then(({ data }) => {
        if (data) {
          setProfile(data);
          setProfileExisted(true);
          return data;
        }

      })
      .then((profileData) => {
        PostApi.getPostsByEmail(profileData.owner).then(({ data }) => {
          if (data) {
            setAllPosts(data);
          }
        });
      })
      .catch((err) => console.error(err));
  }, [setProfile, setProfileExisted]);

  // useEffect(() => {
  //   PostApi.getPostsByEmail(profile.owner)
  //     .then(({ data }) => {
  //       if (data) {
  //         setAllPosts(data);
  //       }
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  const ownersPosts = allPosts.map((post) => (
    <PostCard
      key={post.id}
      post={post}
      onPostUpdate={(postData) => updatePost(post.id, postData)}
      onDeleteClick={() => deletePost(post)}
    />
  ));

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
      const { owner, ...updatedData } = profile;
      const response = await ProfileApi.editProfile(id, updatedData);
      setProfile({ ...response.data });
      setToggleEdit(false);
    } catch (e) {
      console.error(e);
    }
  }

  function updateProfile(data) {
    return !profileExisted ? createProfile(data) : editProfile(data.id, data);
  }

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

  return (
    <div>
      <div className="full-profile">
        <h1>My Profile</h1>
        {profileExisted && (
          <>
            <InformationCard key={profile.id} profileInfo={profile} />
            <button
              className={`btn ${toggleEdit ? "hidden" : ""}`}
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
        <h1>My Posts</h1>
      </div>
      <div className="posts">{ownersPosts}</div>
    </div>
  );
}
