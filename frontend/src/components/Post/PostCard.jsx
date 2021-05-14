import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Cactus from "../../assets/images/cactus.jpg";
import CommentApi from "../../api/CommentApi";
import CommentCard from "../Comment/CommentCard";
import CommentForm from "../Comment/CommentForm";
import UserApi from "../../api/UserApi";
import EditPost from "./EditPost";
import PostApi from "../../api/PostApi";
import InformationCard from "../Profile/InformationCard";

export default function PostCard({ post, onDeleteClick }) {
  // Local state
  const [comments, setComments] = useState([]);
  const [toggleComments, setToggleComments] = useState(false);
  const [toggleBody, setToggleBody] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [user, setUser] = useState({});
  const [image, setImage] = useState([]);
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

  // useEffect(() => {
  //   PostImageApi.getImageByPostId(post.id)
  //     .then(({ data }) => {
  //       setImage(data);
  //     })
  //     .catch((err) => console.error(err));
  // }, [setImage]);

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
    if (post.author === user.email) {
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
      const createDate = post.dateCreated.substring(0, 10);
      return `${createDate}`;
    } else {
      const updateDate = post.lastEdited.substring(0, 10);
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
    <section
      className="postCard-section"
      onClick={() => (toggleBody ? setToggleBody(false) : setToggleBody(true))}
    >
      <div className="postCard">
        <div className="postCard__content">
          <img src={Cactus} className="picture" alt="cactus" />
          <div className="postCard__topic">
            <h1> {post.topic} </h1>
          </div>
          <h2 className="postCard__content-heading">{post.title}</h2>
          <div className="postCard--date">{date()}</div>
          <p className="postCard--user">{post.author}</p>
          {userCheck() && (
            <div className="postCard__editDelete">
              <FontAwesomeIcon
                className="delete"
                icon={["fa", "trash-alt"]}
                onClick={onDeleteClick}
              />
              <FontAwesomeIcon
                className="edit"
                icon={["fa", "edit"]}
                onClick={() =>
                  toggleEdit ? setToggleEdit(false) : setToggleEdit(true)
                }
              />
            </div>
          )}
          {userCheck() && (
            <div className="postCard__editPost">
              {toggleEdit && (
                <div className="postCard__editPostForm">
                  <EditPost
                    onSubmit={(postData) => updatePost(postData)}
                    post={post}
                  />
                </div>
              )}
            </div>
          )}
          {toggleBody && <p className="postCard__content-body">{post.body}</p>}
          <div className="postCard__comments">
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
            {comments.length}
          </div>
        </div>

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
    </section>
  );
}
