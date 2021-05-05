import React, { useEffect, useState } from "react";

// Project files
import PostApi from "../api/PostApi";
import PostCard from "../components/Post/PostCard";
import PostForm from "../components/Post/PostForm";

export default function Feed() {
    // Local state
  const [posts, setPosts] = useState([]);

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
    <div>
      <PostForm onSubmit={(postData) => createPost(postData)} />

      {PostsArray}
    </div>
  );
}
