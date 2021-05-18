import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from "react-select";

// Project files
import PostApi from "../api/PostApi";
import PostCard from "../components/Post/PostCard";
import PostForm from "../components/Post/PostForm";
import Banner from "../components/Banner";
import Topics from "../components/Post/Topics";
import FollowerApi from "../api/FollowerApi";
import ProfileApi from "../api/ProfileApi";

export const Feed = () => {
  // Local state
  const [posts, setPosts] = useState([]);
  const [postsFromFeed, setPostsFromFeed] = useState([]);
  const [toggleForm, setToggleForm] = useState(false);
  const sorterOptions = [
    { value: "displayAllPosts", label: "Display all Posts" },
    {
      value: "displayConnectionsPosts",
      label: "Display posts from connections",
    },
  ];
  //Topic selector state
  const [selectedTopic, setSelectedTopic] = useState(undefined);
  const handleChange = (chosenValue) => {
    if (chosenValue) {
      setSelectedTopic(chosenValue.value);
    } else {
      setSelectedTopic(undefined);
    }
  };
  const [selectedFeed, setSelectedFeed] = useState(undefined);
  const filterFeed = (chosenValue) => {
    if (chosenValue) {
      setSelectedFeed(chosenValue.value);
    } else {
      setSelectedFeed(undefined);
    }
  };

  // Methods
  async function createPost(postData) {
    try {
      const response = await PostApi.createPost(postData);
      const post = response.data;
      const newPosts = [post, ...posts];

      setPosts(newPosts);
    } catch (e) {
      console.error(e);
    }
  }

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

  useEffect(() => {
    PostApi.getAllPosts()
      .then(({ data }) => {
        setPosts(data);
      })
      .catch((err) => console.error(err));
    PostApi.getPostsOfConnections()
      .then(({ data }) => {
        setPostsFromFeed(data);
      })
      .catch((err) => console.error(err));
  }, [setPosts, setPostsFromFeed]);

  // Components
  const postsToShow = (function () {
    if (selectedFeed) {
      return postsFromFeed;
    } else {
      return posts.filter((post) => {
        if (selectedTopic) {
          return post.topic === selectedTopic;
        } else {
          return true;
        }
      });
    }
  })();

  const PostsArray = postsToShow.map((post) => (
    <PostCard
      key={post.id}
      post={post}
      onPostUpdate={(postData) => updatePost(post.id, postData)}
      onDeleteClick={() => deletePost(post)}
    />
  ));

  return (
    <section className="feed-page">
      <Banner />

      <div
        className="Feed__postForm-icon"
        onClick={() =>
          toggleForm ? setToggleForm(false) : setToggleForm(true)
        }
      >
        <h3>Make your own post here</h3>
        <FontAwesomeIcon
          className="postForm-icon"
          icon={["fa", "plus-circle"]}
        />
      </div>
      {toggleForm && (
        <div className="postForm-container">
          <PostForm onSubmit={(postData) => createPost(postData)} />
        </div>
      )}
      <div className="feed__selectors">
        <Select
          isClearable
          className="topic-filter"
          placeholder="Filter by topic"
          labelKey="label"
          valueKey="id"
          options={Topics}
          onChange={handleChange}
        />
        <Select
          isClearable
          className="topic-filter"
          placeholder="Display all posts"
          options={sorterOptions}
          onChange={filterFeed}
        />
      </div>
      <div className="post-array">
      {PostsArray}
      </div>
    </section>
  );
};
