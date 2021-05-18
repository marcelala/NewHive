import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

//Api
import CommentApi from "../../api/CommentApi";
import UserApi from "../../api/UserApi";
import PostApi from "../../api/PostApi";
import ProfileApi from "../../api/ProfileApi";

//Components
import UserCard from "../UserCard";
import CommentCard from "../Comment/CommentCard";
import CommentForm from "../Comment/CommentForm";
import EditPost from "./EditPost";
import PostImage from "./PostImage";
import InformationCard from "../Profile/InformationCard";

import Cactus from "../../assets/images/cactus.jpg";

export default function PostCard({ post, onDeleteClick, onPostUpdate }) {
  // Local state
  const [comments, setComments] = useState([]);
  const [toggleComments, setToggleComments] = useState(false);
  const [toggleBody, setToggleBody] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [user, setUser] = useState({});
  const [profile, setProfile] = useState({});
  const profileOwner = useParams();

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

  useEffect(() => {
    ProfileApi.viewProfileByEmail(post.author)
      .then(({ data }) => {
        if (data) {
          setProfile(data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

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

  async function updateComment(updatedComment, id) {
    try {
      await CommentApi.updateComment(updatedComment, id);
      const newComments = [...comments];
      const ind = comments.findIndex((item) => item.id === id);
      newComments[ind] = { ...newComments[ind], ...updatedComment };
      setComments([...newComments]);
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
    if (post.author === user) {
      return true;
    }
    return false;
  }

  // async function updatePost(updatedPost) {
  //   try {
  //     console.log('updatedPost 1',updatedPost);
  //     await PostApi.updatePost(post.id, updatedPost);
  //     console.log('updatedPost 2',updatedPost);
  //     setToggleEdit(false);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }

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

  const CommentsArray = comments.map((comment) => (
    <CommentCard
      key={comment.id}
      comment={comment}
      onDeleteClick={() => deleteComment(comment)}
      onCommentUpdate={(commentData) => {
        updateComment(commentData, comment.id);
      }}
      user={user}
    />
  ));
  return (
    <section
      className="postCard-section"
      // onClick={() => (toggleBody ? setToggleBody(false) : setToggleBody(true))}
    >
      <div className="postCard">
        <div className="postCard__content">
          <div className="postCard__userCard">
            <Link to={`/user-profile/${post.author}/`}>
              {(profile.name && <UserCard profileInfo={profile} />) || (
                <div>
                  <p className="postCard--user">{post.authorname}</p>
                </div>
              )}
            </Link>
          </div>
          <div className="postCard__topic">
            <h1> {post.topic} </h1>
          </div>

          <h2 className="postCard__content-heading">{post.title}</h2>

          <div className="postCard--date">{date()}</div>

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
                onClick={() => setToggleEdit(true)}
              />
            </div>
          )}
          {userCheck() && (
            <div className="postCard__editPost">
              {toggleEdit && (
                <div className="postCard__editPostForm">
                  <EditPost
                    // onSubmit={(postData) => updatePost(postData)}
                    onSubmit={(postData) => {
                      onPostUpdate(postData);
                      setToggleEdit(false);
                    }}
                    post={post}
                  />
                </div>
              )}
            </div>
          )}

          {toggleBody && <p className="postCard__content-body">{post.body}</p>}
          <div
            className="postCard__content-read-more"
            onClick={() =>
              toggleBody ? setToggleBody(false) : setToggleBody(true)
            }
          >
            <p className="postCard__content-read-more p">Continue reading </p>
            <FontAwesomeIcon className="read-more" icon={["fas", "plus"]} />
          </div>
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
