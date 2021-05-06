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


import java.security.Principal;
import java.util.List;

@RequestMapping("/comments")
@RestController
public class CommentController {
    CommentRepository commentRepository;
    PostRepository postRepository;
    UserRepository userRepository;
    AuthService authService;
    CommentService commentService;
    UserService userService;


    @Autowired
    public CommentController(CommentRepository commentRepository, PostRepository postRepository, UserRepository userRepository , AuthService authService, CommentService commentService) {
        this.commentRepository = commentRepository;
        this.postRepository = postRepository;
        this.userRepository = userRepository;
        this.authService= authService;
        this.commentService=commentService;
    }

 @GetMapping("/{postId}")
    public ResponseEntity<List<Comment>> listAllCommentsOnPost(@PathVariable Long postId) {
        Post post = postRepository.findById(postId).orElseThrow(ResourceNotFoundException::new);
        return ResponseEntity.ok(post.getComments());
    }
    // //Creates a new comment + Works in Postman

    // @PostMapping("/posts/{postId}/comments")
    // public ResponseEntity<Comment> createComment(@PathVariable Long postId, @RequestBody Comment commentParam) {
    //     Post post = postRepository.findById(postId).orElseThrow(ResourceNotFoundException::new);
    //     commentParam.setCommentedPost(post);
    //     commentParam.setUser(userRepository.findByEmail(authService.getLoggedInUserEmail()));
    //     Comment comment = commentService.saveComment(commentParam);
    //     return ResponseEntity.status(HttpStatus.CREATED).body(comment);
    // }

@PostMapping("/{postId}")
    public ResponseEntity<Comment> createComment(@PathVariable Long postId, @RequestBody Comment comment,
            Principal principal) {
        Post post = postRepository.findById(postId).orElseThrow(ResourceNotFoundException::new);

        String userName = principal.getName();
        User user = userService.findUserByEmail(userName);
        comment.setUserCommentOwner(user);

        comment.setCommentOwner(post);
        commentRepository.save(comment);

        return ResponseEntity.status(HttpStatus.CREATED).body(comment);
    }

    // !!! New method !!! Works in Postman
    //Returns all comments on post given by postId
    @GetMapping("/posts/{postId}/comments")
    public ResponseEntity<List<Comment>> getComments(@PathVariable Long postId) {
        Post post = postRepository.findById(postId).orElseThrow(ResourceNotFoundException::new);
        List<Comment> comment = commentRepository.findAll();
        return ResponseEntity.ok(comment);
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


    //Updates a comment
    @PutMapping("/comments/{id}")
    public ResponseEntity<Comment> updateComment(@PathVariable Long id, @RequestBody Comment commentParam) {
        commentRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
        Comment comment = commentService.updateComment(id, commentParam);
        return ResponseEntity.ok(comment);
    }

}