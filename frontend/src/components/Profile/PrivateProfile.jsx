import { useEffect, useState } from "react";
import ProfileApi from "../../api/ProfileApi";
import PostApi from "../../api/PostApi";

import EditProfile from "./EditProfile";
import InformationCard from "./InformationCard";
import PostCard from "../Post/PostCard";

//import ProfileForm from "./ProfileForm";

export default function PrivateProfile () {
    const [toggleEdit, setToggleEdit] = useState(false);    
    const [profile, setProfile] = useState({});
   // const [currentUser, setCurrentUser] = useState({});
    const [profileExisted, setProfileExisted] = useState(false);
    const [allPosts, setAllPosts] = useState([]);
    const [posts, setPosts] = useState([]);


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

    useEffect(() => {
      PostApi.getPostsByEmail(profile.owner)
        .then(({ data }) => {
          if (data) {
            setAllPosts(data);
          }
        })
        .catch((err) => console.error(err));
    }, []);

    const ownersPosts = allPosts.map((post) => (
      <PostCard key={post.author} post={post} />
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
        <div className="posts">
        <h2>My Posts</h2>
        {ownersPosts}
        </div>
      </div>
    );
}