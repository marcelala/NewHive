import React from "react";
import Select from 'react-select';

import Topics from "../Topics";

export default function PostForm({ onSubmit }) {
  const [title, setTitle] = React.useState("");

  const [body, setBody] = React.useState("");

  const [topic, setTopic] = React.useState("");


  const handleSubmit = () => {
    // Invoke the passed in event callback
    onSubmit({
      title: title,
      body: body,
      topic: topic,
    });

    // Clear the input field
    setBody("");
    setTitle("");
    setTopic("");

  };

  return (
    <form>
      <div className="postForm">
        <div>
          <input
            className="postForm__input"
            placeholder="Title of post"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
          />
        </div>
        <div>
          <textarea
            className="postForm__input"
            placeholder="Whats on your mind?"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            type="text"
          />
        </div>
        <Select className="postForm_topic" 
        placeholder= "Select a topic"
        labelKey="label"
        valueKey="id"
        options={Topics}
        onChange={(e) => setTopic(e.value)}
        />
        <div>
          <button className="postForm_btn" type="button" onClick={handleSubmit}>
            Post
          </button>
        </div>
      </div>
    </form>
  );
}
