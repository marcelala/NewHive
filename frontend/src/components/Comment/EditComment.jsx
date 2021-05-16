import {useState} from "react";

export default function EditComment({ onSubmit, comment }) {
  const [body, setBody] = useState(comment.body);

  const handleSubmit = (e) => {
    // Invoke the passed in event callback
    e.preventDefault();
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
