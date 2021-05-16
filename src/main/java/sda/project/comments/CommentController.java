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


@RestController
public class CommentController {
    CommentRepository commentRepository;
    PostRepository postRepository;
    UserRepository userRepository;
    AuthService authService;
    CommentService commentService;
    UserService userService;

    @Autowired
    public CommentController(CommentRepository commentRepository, PostRepository postRepository,UserService userService, UserRepository userRepository , AuthService authService, CommentService commentService) {
        this.commentRepository = commentRepository;
        this.postRepository = postRepository;
        this.userRepository = userRepository;
        this.authService= authService;
        this.commentService=commentService;
        this.userService = userService;
    }

    @GetMapping("/comments/{postId}")
    public ResponseEntity<List<Comment>> listAllCommentsOnPost(@PathVariable Long postId) {
        Post post = postRepository.findById(postId).orElseThrow(ResourceNotFoundException::new);
        return ResponseEntity.ok(post.getComments());
    }

   @PostMapping("/comments/{postId}")
   public ResponseEntity<Comment> createComment(@PathVariable Long postId, @RequestBody Comment comment, Principal principal) {
        Post post = postRepository.findById(postId).orElseThrow(ResourceNotFoundException::new);
        String userName = principal.getName();
        User user = userService.findUserByEmail(userName);
        comment.setUserCommentOwner(user);
        comment.setAuthorname(user.getName());
        comment.setCommentOwner(post);
        comment.setAuthorname(user.getName());
        commentRepository.save(comment);

       return ResponseEntity.status(HttpStatus.CREATED).body(comment);
    }

    //Deletes a comment
    @DeleteMapping("/comments/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteComment(@PathVariable Long id) {
        Comment comment = commentRepository.findById(id)
                .orElseThrow(ResourceNotFoundException::new);
        commentRepository.delete(comment);
    }

    //Returns all comments
    @GetMapping("/comments")
    public ResponseEntity <List<Comment>> listAllComments(){
        List<Comment> comments = commentRepository.findAll();
        return ResponseEntity.ok(comments);
    }


    @PutMapping("/comments/{commentId}")
    public ResponseEntity<Comment> updateComment(@PathVariable Long commentId, @RequestBody Comment updatedComment, Principal principal) {
        Comment comment = commentService.updateComment(commentId, updatedComment, principal);
        return ResponseEntity.ok(comment);
    }

}

