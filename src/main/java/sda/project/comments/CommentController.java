package sda.project.comments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sda.project.auth.AuthService;
import sda.project.exception.ResourceNotFoundException;
import sda.project.posts.Post;
import sda.project.posts.PostRepository;
import sda.project.user.UserRepository;
import sda.project.user.UserService;
import sda.project.user.User;
import java.security.Principal;
import java.util.List;

/** This is a Controller class of Comment Entity which contains methods of Comment Entity.
 * @since : 2021-05-06
 */
@RestController
public class CommentController {
    CommentRepository commentRepository;
    PostRepository postRepository;
    UserRepository userRepository;
    AuthService authService;
    CommentService commentService;
    UserService userService;

    /**
     * Creating the object of different class.
     */
    @Autowired
    public CommentController(CommentRepository commentRepository, PostRepository postRepository,UserService userService, UserRepository userRepository , AuthService authService, CommentService commentService) {
        this.commentRepository = commentRepository;
        this.postRepository = postRepository;
        this.userRepository = userRepository;
        this.authService= authService;
        this.commentService=commentService;
        this.userService = userService;
    }

    /**
     * A method to get all Comments on post.
     * @return all comments will be fetched on the post by provide post id.
     */
    @GetMapping("/comments/{postId}")
    public ResponseEntity<List<Comment>> listAllCommentsOnPost(@PathVariable Long postId) {
        Post post = postRepository.findById(postId).orElseThrow(ResourceNotFoundException::new);
        return ResponseEntity.ok(post.getComments());
    }

    /**
     * A method to create the comment.
     * @param comment is automatically serialized into JSON and passed back into the HttpResponse object.
     * @return comment will be created.
     */
   @PostMapping("/comments/{postId}")
   public ResponseEntity<Comment> createComment(@PathVariable Long postId, @RequestBody Comment comment, Principal principal) {
        Post post = postRepository.findById(postId).orElseThrow(ResourceNotFoundException::new);
        String userName = principal.getName();
        User user = userService.findUserByEmail(userName);
        comment.setUserCommentOwner(user);
        comment.setAuthorname(user.getName());
        comment.setCommentOwner(post);
        commentRepository.save(comment);

       return ResponseEntity.status(HttpStatus.CREATED).body(comment);
    }

    /**
     * A method for deleting post
     * @param id is the primary key of post entity
     */
    @DeleteMapping("/comments/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteComment(@PathVariable Long id) {
        Comment comment = commentRepository.findById(id)
                .orElseThrow(ResourceNotFoundException::new);
        commentRepository.delete(comment);
    }

    /**
     * A method to get all comments.
     * @return fetching all comments
     */
    @GetMapping("/comments")
    public ResponseEntity <List<Comment>> listAllComments(){
        List<Comment> comments = commentRepository.findAll();
        return ResponseEntity.ok(comments);
    }


    /**
     * A method for editing the comment.
     * @param commentId is primary key of comment entity
     * @param updatedComment is automatically serialized into JSON and passed back into the HttpResponse object.
     * @return an updated comment.
     */
    @PutMapping("/comments/{commentId}")
    public ResponseEntity<Comment> updateComment(@PathVariable Long commentId, @RequestBody Comment updatedComment, Principal principal) {
        Comment comment = commentService.updateComment(commentId, updatedComment, principal);
        return ResponseEntity.ok(comment);
    }

}

