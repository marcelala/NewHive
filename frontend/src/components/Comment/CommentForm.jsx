import {useState} from "react";

export default function CommentForm({ onSubmit }) {
  const [body, setBody] = useState("");

  const handleSubmit = () => {
    // Invoke the passed in event callback
    onSubmit({
      body: body,
    });

    // Clear the input field
    setBody("");
  };

  //<NewPostForm onSubmit={(postData) => createPost(postData)} />;

  return (
    <form>
      <div className="comment-form">
        <div className="comment-form-input">
          <textarea
            placeholder="Comment here..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
      </div>
      <div>
        <button
          //className="comment-form btn"
          className={`comment-form btn ${body ? "" : "disabled"}`}
          type="button"
          disabled={!body}
          onClick={handleSubmit}
        >
          Comment
        </button>
      </div>
    </form>
  );
}