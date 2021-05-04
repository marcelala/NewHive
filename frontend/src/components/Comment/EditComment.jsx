import React from "react";

export default function EditComment({ onSubmit, comment }) {
  const [body, setBody] = React.useState(comment.body);

  const handleSubmit = () => {
    // Invoke the passed in event callback
    onSubmit({
      body: body,
    });
  };

  return (
    <form>
      <div>
        <div>
          <textarea
            className="editComment"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            type="text"
          />
        </div>
      </div>
      <div className="form-group">
        <button
          className="btn post comment"
          type="submit"
          onClick={handleSubmit}
        >
          Update
        </button>
      </div>
    </form>
  );
}
