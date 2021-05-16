import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import EditComment from "./EditComment";
import CommentApi from "../../api/CommentApi";

export default function CommentCard({ comment, onDeleteClick, onCommentUpdate, user }) {
  const [toggleEdit, setToggleEdit] = useState(false);

  function userCheck() {
    if (comment.userCommentOwner === user) {
      return true;
    }
    return false;
  }

  function dateCreatedOrUpdatedCheck() {
    if (comment.created === null) {
      return false;
    } else {
      return true;
    }
  }

  function date() {
    if (dateCreatedOrUpdatedCheck()) {
      const createDate = comment.created.substring(0, 10);
      return `${createDate}`;
    } else {
      const updateDate = comment.updated.substring(0, 10);
      return `Updated: ${updateDate}`;
    }
  }

  // async function updateComment(updatedComment) {
  //   try {
  //     await CommentApi.updateComment(updatedComment, comment.id);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }

  return (
    <div className="commentCard">
      <div className="commentCard__content">
        <p>{comment.body}</p>
        <p className="commentCard--user">{comment.authorname}</p>
      </div>
      <div className="commentCard--date">{date()}</div>
      {userCheck() && (
        <div>
          <div className="commentCard__editDelete">
            <div className="commentCard__Delete">
              <FontAwesomeIcon
                className="delete"
                icon={["fa", "trash-alt"]}
                onClick={onDeleteClick}
              />
            </div>
            <p className="commentCard__editDelete--heading"></p>
            <FontAwesomeIcon
              className="edit"
              icon={["fa", "edit"]}
              onClick={() =>
                toggleEdit ? setToggleEdit(false) : setToggleEdit(true)
              }
            />
          </div>
          {toggleEdit && (
            <EditComment
              onSubmit={(commentData) => {
                onCommentUpdate(commentData);
                setToggleEdit(false);
              }
            }
              comment={comment}
            />
          )}
        </div>
      )}
    </div>
  );
}
