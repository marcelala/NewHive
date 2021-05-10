import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Project files
import PostApi from "../api/PostApi";
import PostCard from "../components/Post/PostCard";
import PostForm from "../components/Post/PostForm";
import Banner from "../components/Banner";



export const Feed = () => {
    // Local state
  const [posts, setPosts] = useState([]);
  const [toggleForm, setToggleForm] = useState(false);


  // Methods
  async function createPost(postData) {
    try {
      const response = await PostApi.createPost(postData);
      const post = response.data;
      const newPosts = posts.concat(post);

      setPosts(newPosts);
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

  useEffect(() => {
    PostApi.getAllPosts()
      .then(({ data }) => setPosts(data))
      .catch((err) => console.error(err));
  }, [setPosts]);

  // Components
  const PostsArray = posts.map((post) => (
    <PostCard key={post.id} post={post} onDeleteClick={() => deletePost(post)} />
  ));

  return (

    <div className="feed">
      <Banner/>

      <div className="Feed__postForm-icon">
            <h3>Make your own post</h3>
            <FontAwesomeIcon
              className="postForm-icon"
              icon={["fa", "plus-circle"]}
              onClick={() =>
                toggleForm
                  ? setToggleForm(false)
                  : setToggleForm(true)
              }
            />
          </div>

          {toggleForm && (
        <div className="postForm-container">
            <PostForm onSubmit={(postData) => createPost(postData)}/>
        </div>
      )}
      {PostsArray}
    </div>
  );
}
