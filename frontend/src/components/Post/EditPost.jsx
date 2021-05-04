import React from "react";

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
    <form>
      <div>
        <div>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
          />
        </div>
        <div>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            type="text"
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
