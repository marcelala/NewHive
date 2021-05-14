import React from "react";

import Select from 'react-select';

import Topics from "./Topics";

export default function EditPost({ onSubmit, post }) {
  const [title, setTitle] = React.useState(post.title);

  const [body, setBody] = React.useState(post.body);

  const [topic, setTopic] = React.useState(post.topic);


  const handleSubmit = () => {
    // Invoke the passed in event callback
    onSubmit({
      title: title,
      body: body,
      topic: topic
    });
  };

  return (
    <form className="editPost-form">
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
         <Select className="editForm_topic-selector" 
        placeholder= "Select a topic"
        labelKey="label"
        valueKey="id"
        options={Topics}
        onChange={(e) => setTopic(e.value)}
        />
        </div>
      </div>
      <div>
        <button className="btn" type="submit" onClick={handleSubmit}>
          Update
        </button>
      </div>
    </form>
  );
}
