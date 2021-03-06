import { useState } from "react";

import Select from "react-select";

import Topics from "./Topics";

export default function EditPost({ onSubmit, post }) {
  const [title, setTitle] = useState(post.title);

  const [body, setBody] = useState(post.body);

  const [topic, setTopic] = useState(post.topic);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      title: title,
      body: body,
      topic: topic,
    });
  };

  return (
    <form className="editPost-form" onSubmit={handleSubmit}>
      <div className="editPost">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          type="text"
        />
        <div className="editForm_topic">
          <Select
            className="editForm_topic-selector"
            placeholder="Select a topic"
            labelKey="label"
            valueKey="id"
            options={Topics}
            onChange={(e) => setTopic(e.value)}
          />
        </div>
      </div>
      <div>
        <button className="btn" type="submit">
          Update
        </button>
      </div>
    </form>
  );
}
