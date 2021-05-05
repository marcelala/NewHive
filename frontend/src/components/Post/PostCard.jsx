import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Cactus from "../../assets/images/cactus.jpg";
import CommentApi from "../../api/CommentApi";
import CommentCard from "../Comment/CommentCard";
import CommentForm from "../Comment/CommentForm";
import UserApi from "../../api/UserApi";
import EditPost from "./EditPost";
import PostApi from "../../api/PostApi";

export default function PostCard({ post, onDeleteClick }) {
  // Local state
  const [comments, setComments] = useState([]);
  const [toggleComments, setToggleComments] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [user, setUser] = useState({});

  // Methods

  useEffect(() => {
    UserApi.getUser()
      .then(({ data }) => {
        setUser(data);
      })
      .catch((err) => console.error(err));
  }, [setUser]);

  useEffect(() => {
    CommentApi.getCommentByPostId(post.id)
      .then(({ data }) => {
        setComments(data);
      })
      .catch((err) => console.error(err));
  }, [setComments]);

  async function createComment(commentData) {
    console.log(commentData);
    try {
      const response = await CommentApi.createComment(commentData, post.id);
      const comment = response.data;
      const newComment = comments.concat(comment);

      setComments(newComment);
    } catch (e) {
      console.error(e);
    }
  }

  async function deleteComment(comment) {
    try {
      await CommentApi.deleteComment(comment.id);
      const newComments = comments.filter((c) => c.id !== comment.id);

      setComments(newComments);
    } catch (e) {
      console.error(e);
    }
  }

  function userCheck() {
    if (post.postOwner === user.email) {
      return true;
    }
    return false;
  }

  async function updatePost(updatedPost) {
    try {
      await PostApi.updatePost(post.id, updatedPost);
    } catch (e) {
      console.error(e);
    }
  }

  function dateCreatedOrUpdatedCheck() {
    if (post.created === null) {
      return false;
    } else {
      return true;
    }
  }

  function date() {
    if (dateCreatedOrUpdatedCheck()) {
      const createDate = post.created.substring(0, 10);
      return `Created: ${createDate}`;
    } else {
      const updateDate = post.updated.substring(0, 10);
      return `Updated: ${updateDate}`;
    }
  }

  // Components;

  const CommentsArray = comments.map((comment) => (
    <CommentCard
      key={comment.id}
      comment={comment}
      onDeleteClick={() => deleteComment(comment)}
      user={user}
    />
  ));
  return (
    <div className="postCard">
      <div className="postCard__content">
        <div className="postCard__topic-picture">
          <img src={Cactus} className="topic-picture" alt="cactus" />
        </div>
        <h2 className="postCard__content-heading">{post.title}</h2>
        <p>{post.body}</p>
      </div>
      <div className="postCard__comments">
        <div className="postCard__comments-btn">
          <div className="postCard__comments-icon">
            <FontAwesomeIcon
              className="comments-icon"
              icon={["fa", "comments"]}
              onClick={() =>
                toggleComments
                  ? setToggleComments(false)
                  : setToggleComments(true)
              }
            />
          </div>
        </div>
        {comments.length}
      </div>
      <p className="postCard--user">{post.postOwner}</p>
      {userCheck() && (
        <div>
          <div className="postCard__editDelete">
            <div className="commentCard__Delete">
              <FontAwesomeIcon
                className="delete"
                icon={["fa", "trash-alt"]}
                onClick={onDeleteClick}
              />
            </div>
            <button
              className="btn"
              type="button"
              onClick={() =>
                toggleEdit ? setToggleEdit(false) : setToggleEdit(true)
              }
            >
              Edit
            </button>
          </div>
          {toggleEdit && (
            <EditPost
              onSubmit={(postData) => updatePost(postData)}
              post={post}
            />
          )}
        </div>
      )}

      <div className="postCard--date">{date()}</div>

      {toggleComments && (
        <div className="commentCard-container">
          <div>{CommentsArray}</div>
          <div className="commentCard__commentForm">
            <CommentForm
              onSubmit={(commentData) => createComment(commentData)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
