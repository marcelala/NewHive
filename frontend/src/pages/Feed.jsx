import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from "react-select";

// Project files
import PostApi from "../api/PostApi";
import PostCard from "../components/Post/PostCard";
import PostForm from "../components/Post/PostForm";
import Banner from "../components/Banner";
import Topics from "../components/Post/Topics";

export const Feed = () => {
  // Local state
  const [posts, setPosts] = useState([]);
  const [toggleForm, setToggleForm] = useState(false);
  const sorterOptions = [
    { value: "displayAllPosts", 
      label: "Display all Posts" },
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
  const PostsArray = () => {
    return posts
      .filter((post) => {
        if (selectedTopic) {
          return post.topic === selectedTopic;
        } else {
          return true;
        }
      })
      .map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onDeleteClick={() => deletePost(post)}
        />
      ));
  };

  return (
    <div className="feed">
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
        {/* <Select
          isClearable
          className="topic-filter"
          placeholder="Display all posts"
          options={sorterOptions}
          onChange={handleChange}
        /> */}
      </div>
      {PostsArray()}
    </div>
  );
};
