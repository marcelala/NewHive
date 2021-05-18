package sda.project.comments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sda.project.exception.ResourceNotFoundException;
import sda.project.user.UserService;
import sda.project.user.User;


import java.security.Principal;

/**
 * A service class which contains necessary service methods to operate Comment Entity.
 * @since : 2021-05-06
 */
@Service
public class CommentService {

    CommentRepository commentRepository;
    UserService userService;

    /**
     * Creating the object of different class.
     */
    @Autowired
    public CommentService(CommentRepository commentRepository, UserService userService) {
        this.commentRepository = commentRepository;
        this.userService = userService;
    }

    /**
     * A method to save comment in commentRepository.
     * @return created comment will be saved in commentRepository
     */
    public Comment saveComment(Comment commentParam){
        return commentRepository.save(commentParam);
    }

    /**
     * A method to update comment in postRepository by authorized User.
     * @thows UnAuthorized Exception if the author is unAuthorized
     */
    public Comment updateComment(Long id, Comment updatedComment, Principal principal) {
        Comment comment = commentRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
        String userName = principal.getName();
        User user = userService.findUserByEmail(userName);

        if (!userName.equals(comment.getUserCommentOwner().getEmail())) {
            throw new ResourceNotFoundException();

        }
        updatedComment.setId(id);
        updatedComment.setCommentOwner(comment.getCommentOwner());
        updatedComment.setUserCommentOwner(user);
        commentRepository.save(updatedComment);
        return updatedComment;
    }


    /**
     * A method to delete comment by id for authorized user.
     * @param id is id which is query parameter to delete the comment
     */
    public Comment deleteComment(Long id, Principal principal) {
        Comment comment = commentRepository.findById(id).orElseThrow(ResourceNotFoundException::new);

        String userName = principal.getName();

        if (!userName.equals(comment.getUserCommentOwner().getEmail())) {
            throw new ResourceNotFoundException();
        }
        return comment;
    }
}
